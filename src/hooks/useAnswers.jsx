import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
const useAnswers = (videoID) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            // Database related works
            const db = getDatabase();
            const answerRef = ref(db, 'answers/' + videoID + '/questions');
            const answerQuery = query(answerRef, orderByKey());
            try {
                setError(false);
                setLoading(true);

                // request firebase database
                const snapshot = await get(answerQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setAnswers((preAnswers) => {
                        return [...preAnswers, ...Object.values(snapshot.val())];
                    });
                }
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        }

        fetchAnswers();
    }, [videoID]);

    return {
        loading,
        error,
        answers,
    };
};

export default useAnswers;
