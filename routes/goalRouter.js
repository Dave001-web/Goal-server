const router = require('express').Router();
const {
    createGoal,
    getAllGoals,
    getOngoingsGoals,
    getCompletedGoals,
    getSingleGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalControllers');

router.post('/', createGoal); 
router.get('/', getAllGoals);
router.get('/ongoing', getOngoingsGoals);
router.get('/completed', getCompletedGoals);
router.get('/:goalid', getSingleGoal);  
router.patch('/:goalid', updateGoal);
router.delete('/:goalid', deleteGoal);

module.exports = router;
