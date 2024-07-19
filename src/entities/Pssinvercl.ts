import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pssincl } from "./Pssincl";
import { Pssinlossadj } from "./Pssinlossadj";
import { Pssinchc } from "./Pssinchc";

@Index("fk_CL", ["idcl"], {})
@Index("fk_userCl", ["idchc"], {})
@Index("fk_useradj", ["idlossadj"], {})
@Entity("pssinvercl", { schema: "rgidb" })
export class Pssinvercl {
  @Column("int", { name: "IDCL", nullable: true })
  idcl: number | null;

  @Column("int", { name: "NVERINIZIO", nullable: true })
  nverinizio: number | null;

  @Column("bigint", { name: "NVERFINE", nullable: true })
  nverfine: string | null;

  @Column("datetime", { name: "DLOAD", nullable: true })
  dload: Date | null;

  @Column("int", { name: "ETYPECL", nullable: true })
  etypecl: number | null;

  @Column("int", { name: "ESTATUSTECH", nullable: true })
  estatustech: number | null;

  @Column("datetime", { name: "DLASTREOPENTTECH", nullable: true })
  dlastreopenttech: Date | null;

  @Column("datetime", { name: "DLASTCLOSETECH", nullable: true })
  dlastclosetech: Date | null;

  @Column("int", { name: "IDCHC", nullable: true })
  idchc: number | null;

  @Column("int", { name: "IDLOSSADJ", nullable: true })
  idlossadj: number | null;

  @Column("int", { name: "BLIABFORCVALID", nullable: true })
  bliabforcvalid: number | null;

  @Column("int", { name: "BREDUCED", nullable: true })
  breduced: number | null;

  @Column("int", { name: "IDUSERUPDATE", nullable: true })
  iduserupdate: number | null;

  @Column("datetime", { name: "DUPDATE", nullable: true })
  dupdate: Date | null;

  @Column("int", { name: "BINTERCOMPANY", nullable: true })
  bintercompany: number | null;

  @Column("int", { name: "CNUMCLFULL", nullable: true })
  cnumclfull: number | null;

  @Column("int", { name: "ESTATUSACC", nullable: true })
  estatusacc: number | null;

  @Column("int", { name: "DLASTREOPENACC", nullable: true })
  dlastreopenacc: number | null;

  @Column("datetime", { name: "DLASTCLOSEACC", nullable: true })
  dlastcloseacc: Date | null;

  @Column("int", { name: "BNOTIFYARBIT", nullable: true })
  bnotifyarbit: number | null;

  @Column("int", { name: "EEFFPOL", nullable: true })
  eeffpol: number | null;

  @Column("int", { name: "NSERIESYEAR", nullable: true })
  nseriesyear: number | null;

  @Column("int", { name: "ESTATUSPRACTMGN", nullable: true })
  estatuspractmgn: number | null;

  @Column("int", { name: "EREASCLOSECL", nullable: true })
  ereasclosecl: number | null;

  @Column("int", { name: "EVISMAN", nullable: true })
  evisman: number | null;

  @Column("int", { name: "BUPDATEDFROMFLOW", nullable: true })
  bupdatedfromflow: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => Pssincl, (pssincl) => pssincl.pssinvercls, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDCL", referencedColumnName: "idcl" }])
  idcl2: Pssincl;

  @ManyToOne(() => Pssinlossadj, (pssinlossadj) => pssinlossadj.pssinvercls, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDLOSSADJ", referencedColumnName: "idlossadj" }])
  idlossadj2: Pssinlossadj;

  @ManyToOne(() => Pssinchc, (pssinchc) => pssinchc.pssinvercls, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDCHC", referencedColumnName: "idchc" }])
  idchc2: Pssinchc;
}
