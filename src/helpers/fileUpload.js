export const uploadToCloudinary = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/dolsv3vie/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "journal-app");
  formData.append("folder", "react");
  try {
    const resp = await fetch(url, { method: "POST", body: formData });
    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    console.log(error);
  }
};
