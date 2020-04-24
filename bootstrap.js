import './style/style.less';

import("./pkg").then(module => {
    module.run_app();
});