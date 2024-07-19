import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Pssincl } from "./Pssincl";
import { Pssinsettlement } from "./Pssinsettlement";

@Index("FK_IDSET", ["idset"], {})
@Entity("pssinclset", { schema: "rgidb" })
export class Pssinclset {
  @Column("int", { primary: true, name: "IDCL" })
  idcl: number;

  @Column("int", { primary: true, name: "IDSET" })
  idset: number;

  @Column("int", { name: "NVERINIZIO", nullable: true })
  nverinizio: number | null;

  @Column("bigint", { name: "NVERFINE", nullable: true })
  nverfine: string | null;

  @ManyToOne(() => Pssincl, (pssincl) => pssincl.pssinclsets, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDCL", referencedColumnName: "idcl" }])
  idcl2: Pssincl;

  @ManyToOne(
    () => Pssinsettlement,
    (pssinsettlement) => pssinsettlement.pssinclsets,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "IDSET", referencedColumnName: "idset" }])
  idset2: Pssinsettlement;
}
