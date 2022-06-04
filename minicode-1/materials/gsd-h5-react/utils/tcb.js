export async function getCloudInstance() {
  return await getApp().app.cloud.getCloudInstance();
}
