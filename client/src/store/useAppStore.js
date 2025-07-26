import { create } from 'zustand';

const initialState = [
    {
        id: 'app_001',
        company: 'Google',
        position: 'Frontend Developer',
        appliedAt: '2025-07-15',
        status: 'interviewing',
        interviewDate: 'example date',
        source: 'example sourse',
        notes: 'example notes',
    },
    {
        id: 'app_002',
        company: 'Revolut',
        position: 'React Engineer',
        appliedAt: '2025-07-17',
        status: 'submitted',
        interviewDate: 'example date',
        source: 'example sourse',
        notes: 'example notes',
    },
]
const useAppStore = create((set) => ({
    applications: initialState,
    isModalOpen: false,
    isEditModalOpen: false,
    activeApplicationId: null,

    setActiveApplicationId: (id) => set({ activeApplicationId: id }),
    setIsEditModalOpen: (isOpen) => set({ isEditModalOpen: isOpen }),
    setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
    addApplication: (application) => set((state) => ({ applications: [...state.applications, application] })),
    updateApplication: (id, application) => set((state) => ({ applications: state.applications.map((app) => app.id === id ? application : app) })),
    deleteApplication: (id) => set((state) => ({ applications: state.applications.filter((app) => app.id !== id) })),
}));

export default useAppStore;