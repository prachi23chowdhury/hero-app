import React, { useEffect } from 'react';

const Title = (title) => {
    useEffect(() => {
        document.title = title || 'HeroApp'; 
    }, [title]);
};


export default Title;
