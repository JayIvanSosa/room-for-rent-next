const { orderBy, onSnapshot, QuerySnapshot } = require("firebase/firestore");

const hostingList = () => {
  const [hosting, setHosting] = useState(initialState);

  useEffect(() => {
    const collectionRef = collection(db, "hosting");

    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubscibe = onSnapshot(q, (QuerySnapshot) => {
      setHosting(
        QuerySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
  });
};
