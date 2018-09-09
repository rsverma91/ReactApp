import axios from 'axios';

/**
 * @function
 * @desc Fetch api data 
 * @param {Function} callback Callback function
 * @returns none
 */
export const fetchApi = callback => {
    axios.get('url')
        .then(function (response) {
            if (response.data && response.data.length) {
                callback(response.data);
            } else {
                callback([])
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}