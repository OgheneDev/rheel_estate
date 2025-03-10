import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const getCareers = async () => {
    try {
        const careersRef = collection(db, 'careers');
        const querySnapshot = await getDocs(careersRef);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error fetching careers:', error);
        throw error;
    }
};
