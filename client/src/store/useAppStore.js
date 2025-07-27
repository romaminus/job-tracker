
import { create } from 'zustand';

import {
  getApplications,
  createApplication,
  updateApplication as apiUpdateApplication, 
  deleteApplication as apiDeleteApplication, 
} from '../api/api';

const useAppStore = create((set, get) => ({
  applications: [], 
  isModalOpen: false,
  isEditModalOpen: false,
  activeApplicationId: null,

  setActiveApplicationId: (id) => set({ activeApplicationId: id }),
  setIsEditModalOpen: (isOpen) => set({ isEditModalOpen: isOpen }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),

  fetchApplications: async () => {
    try {
      const apps = await getApplications();
      set({ applications: apps });
      console.log('Заявки успішно завантажено з API:', apps);
    } catch (error) {
      console.error("Помилка при завантаженні заявок:", error);
    }
  },

  addApplication: async (newApplicationData) => {
    try {
      const createdApp = await createApplication(newApplicationData);
      set((state) => ({ applications: [...state.applications, createdApp] }));
      console.log('Заявку успішно додано через API:', createdApp);
    } catch (error) {
      console.error("Помилка при додаванні заявки:", error);
    }
  },

  updateApplication: async (id, updatedFields) => {
    try {
      const currentApplications = get().applications;
      const appToUpdate = currentApplications.find(app => app.id === id);

      if (!appToUpdate) {
        console.error(`Заявка з ID ${id} не знайдена в локальному стані для оновлення.`);
        return; 
      }

      const fullUpdatedApp = { ...appToUpdate, ...updatedFields };
      const receivedUpdatedApp = await apiUpdateApplication(id, fullUpdatedApp);

      set((state) => ({
        applications: state.applications.map((app) =>
          app.id === receivedUpdatedApp.id ? receivedUpdatedApp : app
        ),
      }));
      console.log('Заявку успішно оновлено через API:', receivedUpdatedApp);
    } catch (error) {
      console.error(`Помилка при оновленні заявки з ID ${id}:`, error);
    }
  },

  deleteApplication: async (id) => {
    try {
      await apiDeleteApplication(id);
      set((state) => ({
        applications: state.applications.filter((app) => app.id !== id),
      }));
      console.log(`Заявку з ID ${id} успішно видалено через API.`);
    } catch (error) {
      console.error(`Помилка при видаленні заявки з ID ${id}:`, error);
    }
  },
}));

export default useAppStore;