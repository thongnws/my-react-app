import { setupWorker, rest } from 'msw';
import { random } from 'lodash';
import { nanoid } from 'nanoid';

const schoolIds = Array.from({ length: 20 }).map(() => nanoid());
const legalguardianIds = Array.from({ length: 20 }).map(() => nanoid());

const worker = setupWorker(
  rest.get('/students/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        id: id,
        name: `Student ${nanoid(10)}`,
        schoolId: schoolIds[random(19)],
        legalguardianId: legalguardianIds[random(19)],
      }),
    );
  }),

  rest.get('/schools/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        id: id,
        name: `School ${nanoid(10)}`,
      }),
    );
  }),

  rest.get('/legalguardians/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        id: id,
        name: `Legalguardian ${nanoid(10)}`,
      }),
    );
  }),
);

export default worker;
