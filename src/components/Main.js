import React from 'react';
import Thumbnail from "./Thumbnail";

function Main({results}) {
    return (
        <div>
            {results?.map(result => (
                <Thumbnail key={result.id} result={result}/>
            ))
            }
        </div>
    );
}

export default Main;
