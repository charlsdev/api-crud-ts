import Router from 'express-promise-router';
const router = Router();

import {
   allPacients,
   deletePacient,
   onePacient,
   savePacient,
   updatePacient,

   allVaccinations,
   oneVaccination
} from '../controllers/mongo.controllers';

router.get('/', allPacients);
router.post('/', savePacient);
router.get('/:id', onePacient);
router.delete('/:id', deletePacient);
router.put('/:id', updatePacient);

router.get('/vacc/all', allVaccinations);
router.get('/vacc/:id', oneVaccination);

export default router;