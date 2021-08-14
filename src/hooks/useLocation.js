import React, { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (callback) => {

    const [err, setErr] = useState(null);    
    
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {          
            try {
                await requestForegroundPermissionsAsync();
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },     
                location => callback(location),              
                );
                
            } catch (e) {
                setErr(e);
                //console.log(e.message);
            }
        };
        startWatching()
    }, [callback]);

    return [err];
};