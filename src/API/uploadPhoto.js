import storage from '@react-native-firebase/storage';

export default async (img, folder, name) => {
  const storageRef = storage().refFromURL(`gs://meaug1.appspot.com/${folder}/${name}.jpeg`);
  await storageRef.putFile(img);
  const photoURL = await storageRef.getDownloadURL();

  return photoURL;
};
