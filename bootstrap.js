import './style/style.css';

import("./pkg").then(module => {
    module.run_app();
});