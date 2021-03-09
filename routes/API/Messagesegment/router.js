const router = require('express').Router()
const controller = require('./controller')
router.post('/messagecreate',
    controller.CreateMessageSegments
)
router.post('/update',
    controller.UpdateMessageSegments
)
router.get('/fetch',
    controller.FetchMessageSegments
)
router.delete('/delete',
    controller.DeleteMessageSegment
)
module.exports = router;