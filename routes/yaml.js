
const express = require('express');
const router = express();

router.get('/yaml', (req, res) => {
    res.status(200).json({ 
        status: 200, 
        workloadName: "percona",
        nameSpaceyaml: "https://github.com/openebs/e2e-infrastructure/blob/816ae44f1bd9c886ce506a72b542edcb323a50b3/production/percona-cstor/percona-cstor-namespace.yaml",
        workloadyaml:"https://github.com/openebs/e2e-infrastructure/blob/816ae44f1bd9c886ce506a72b542edcb323a50b3/production/percona-cstor/percona-openebs-deployment.yaml"
 });
});



module.exports = router;