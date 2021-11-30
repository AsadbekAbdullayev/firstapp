import React from 'react';

class Farzand extends React.Component{
    render(){
        return (
            <div>
                <h1>Salom man farzandanman</h1>
            </div>
        )
        }
}

class Student extends React.Component{
    render(){
        return (
            <div>
                <h1>Salom man studentdanman</h1>
            </div>
        )
        }
}

export { Farzand}
export default Student;

// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
