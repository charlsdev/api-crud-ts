import Router from 'express-promise-router';
const router = Router();

import {
   allPacients,
   deletePacient,
   onePacient,
   savePaciente,
   updatePacient
} from '../controllers/mysql.controllers';

router.get('/', allPacients);
router.post('/', savePaciente);
router.get('/:id', onePacient);
router.delete('/:id', deletePacient);
router.put('/', updatePacient);

export default router;