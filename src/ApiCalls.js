export const fetchTricks = async () => {
  const url = 'https://dog-tricks-api-4.onrender.com/api/v1/dog-tricks/';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Sorry, failed network request, please try again.')
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

export const fetchTrick = async (id) => {
  const url = `https://dog-tricks-api-4.onrender.com/api/v1/dog-tricks/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Sorry, failed network request, please try again.')
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

export const postTrick = async (data) => {
  const url = 'https://dog-tricks-api-4.onrender.com/api/v1/dog-tricks';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
      throw new Error('Sorry, failed network request, please try again.')
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}