import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Pssicclassmin } from "./Pssicclassmin";
import { Puuser } from "./Puuser";
import { Pssinclset } from "./Pssinclset";
import { Pssinvercl } from "./Pssinvercl";

@Index("fk_clsmin", ["idclassmin"], {})
@Index("fk_uer", ["iduser"], {})
@Entity("pssincl", { schema: "rgidb" })
export class Pssincl {
  @Column("int", { primary: true, name: "IDCL" })
  idcl: number;

  @Column("int", { name: "CNUMCL", nullable: true })
  cnumcl: number | null;

  @Column("int", { name: "IDCLASSMIN", nullable: true })
  idclassmin: number | null;

  @Column("int", { name: "KCLCLASS", nullable: true })
  kclclass: number | null;

  @Column("int", { name: "BMIGRATE", nullable: true })
  bmigrate: number | null;

  @Column("int", { name: "CNUMMIGRATE", nullable: true })
  cnummigrate: number | null;

  @Column("int", { name: "CNUMOUTSOURCE", nullable: true })
  cnumoutsource: number | null;

  @Column("datetime", { name: "DOPENING", nullable: true })
  dopening: Date | null;

  @Column("int", { name: "IDUSER", nullable: true })
  iduser: number | null;

  @Column("datetime", { name: "DINS", nullable: true })
  dins: Date | null;

  @Column("int", { name: "ETYPE", nullable: true })
  etype: number | null;

  @Column("int", { name: "BRECEIVEDFROMFLOW", nullable: true })
  breceivedfromflow: number | null;

  @Column("int", { name: "CNUMCLLEADCOMP", nullable: true })
  cnumclleadcomp: number | null;

  @Column("int", { name: "BSENTIVASS", nullable: true })
  bsentivass: number | null;

  @ManyToOne(() => Pssicclassmin, (pssicclassmin) => pssicclassmin.pssincls, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDCLASSMIN", referencedColumnName: "idclassmin" }])
  idclassmin2: Pssicclassmin;

  @ManyToOne(() => Puuser, (puuser) => puuser.pssincls, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDUSER", referencedColumnName: "iduser" }])
  iduser2: Puuser;

  @OneToMany(() => Pssinclset, (pssinclset) => pssinclset.idcl2)
  pssinclsets: Pssinclset[];

  @OneToMany(() => Pssinvercl, (pssinvercl) => pssinvercl.idcl2)
  pssinvercls: Pssinvercl[];
}
