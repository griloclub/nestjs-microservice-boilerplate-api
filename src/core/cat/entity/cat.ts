import { BaseEntity } from '@/utils/entity';
import { Infer, InputValidator } from '@/utils/validator';

const ID = InputValidator.string().uuid();
const Name = InputValidator.string().trim().min(1).max(200);
const Breed = InputValidator.string().trim().min(1).max(200);
const Age = InputValidator.number().min(0).max(30);
const CreatedAt = InputValidator.date().nullish();
const UpdatedAt = InputValidator.date().nullish();
const DeletedAt = InputValidator.date().nullish();

export const CatEntitySchema = InputValidator.object({
  id: ID,
  name: Name,
  breed: Breed,
  age: Age,
  createdAt: CreatedAt,
  updatedAt: UpdatedAt,
  deletedAt: DeletedAt
});

type Cat = Infer<typeof CatEntitySchema>;

export class CatEntity extends BaseEntity<CatEntity>() {
  name!: string;

  breed!: string;

  age!: number;

  constructor(entity: Cat) {
    super(CatEntitySchema);
    Object.assign(this, this.validate(entity));
  }
}
