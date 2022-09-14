import Router from 'express-promise-router';
const router = Router();

import {
   allPacients,
   deletePacient,
   onePacient,
   savePacient,
   updatePacient
} from '../controllers/mongo.controllers';

router.get('/', allPacients);
router.post('/', savePacient);
router.get('/:id', onePacient);
router.delete('/:id', deletePacient);
router.put('/:id', updatePacient);

export default router;