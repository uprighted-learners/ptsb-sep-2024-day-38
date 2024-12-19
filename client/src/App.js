// src/App.js
import React, { useState } from 'react';

const App = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [message, setMessage] = useState('');

    return (
        <div>
            <h1>any change that i make immediately is shown in the browser when i save</h1>
        </div>
    );
};

export default App;