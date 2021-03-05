import storage from '@react-native-firebase/storage';

export default async (img, name) => {
  const storageRef = storage().refFromURL(`gs://meaug1.appspot.com/${name}.jpeg`);
  await storageRef.putFile(img);
  const photoURL = await storageRef.getDownloadURL();

  return photoURL;
};
