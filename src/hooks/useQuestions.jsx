import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useQuestions = (videoID) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            // Database related works
            const db = getDatabase();
            const quizRef = ref(db, 'quiz/' + videoID + '/questions');
            const quizQuery = query(quizRef, orderByKey());
            try {
                setError(false);
                setLoading(true);

                // request firebase database
                const snapshot = await get(quizQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setQuestions((preQuestions) => {
                        return [...preQuestions, ...Object.values(snapshot.val())];
                    });
                }
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        }

        fetchQuestions();
    }, [videoID]);

    return {
        loading,
        error,
        questions,
    };
};

export default useQuestions;
