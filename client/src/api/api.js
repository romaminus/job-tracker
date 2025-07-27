
const API_BASE_URL = 'http://localhost:5000';

/**
 * Отримує всі заявки з сервера.
 * @returns {Promise<Array>} Масив об'єктів заявок.
 */
export const getApplications = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка при отриманні заявок:", error);
    throw error; // Перекидаємо помилку далі для обробки у zustand-сторі або компоненті
  }
};

export const createApplication = async (applicationData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Невідома помилка'}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка при створенні заявки:", error);
    throw error;
  }
};

export const updateApplication = async (id, updatedApplicationData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedApplicationData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Невідома помилка'}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Помилка при оновленні заявки з ID ${id}:`, error);
    throw error;
  }
};


export const deleteApplication = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, response: ${errorText || 'No additional info'}`);
    }
    return;
  } catch (error) {
    console.error(`Помилка при видаленні заявки з ID ${id}:`, error);
    throw error;
  }
};