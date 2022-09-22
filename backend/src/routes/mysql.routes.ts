import Router from 'express-promise-router';
const router = Router();

import {
   allPacients,
   deletePacient,
   onePacient,
   savePaciente,
   updatePacient,

   allVaccinations,
   oneVaccination
} from '../controllers/mysql.controllers';

router.get('/', allPacients);
router.post('/', savePaciente);
router.get('/:id', onePacient);
router.delete('/:id', deletePacient);
router.put('/', updatePacient);

router.get('/vacc/all', allVaccinations);
router.get('/vacc/:id', oneVaccination);

export default router;