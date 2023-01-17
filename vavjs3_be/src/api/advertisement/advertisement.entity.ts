import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Advertisement {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public adUrl: string;

  @Column()
  public adImageUrl: string;

  @Column({ type: 'integer' })
  public adCount: number;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
