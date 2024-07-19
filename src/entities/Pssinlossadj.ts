import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Puuser } from "./Puuser";
import { Pssinvercl } from "./Pssinvercl";

@Index("fk_user", ["iduser"], {})
@Entity("pssinlossadj", { schema: "rgidb" })
export class Pssinlossadj {
  @Column("int", { primary: true, name: "IDLOSSADJ" })
  idlossadj: number;

  @Column("int", { name: "IDUSER", nullable: true })
  iduser: number | null;

  @Column("varchar", { name: "CCOD", nullable: true, length: 6 })
  ccod: string | null;

  @Column("int", { name: "CDESCR", nullable: true })
  cdescr: number | null;

  @Column("int", { name: "CCODISVAP", nullable: true })
  ccodisvap: number | null;

  @Column("int", { name: "ETYPECOOPERATION", nullable: true })
  etypecooperation: number | null;

  @Column("int", { name: "BUSERAGENCY", nullable: true })
  buseragency: number | null;

  @Column("int", { name: "IDDATAPARTY", nullable: true })
  iddataparty: number | null;

  @Column("int", { name: "IDDATAPAYM", nullable: true })
  iddatapaym: number | null;

  @Column("int", { name: "IDLISTCOMPET", nullable: true })
  idlistcompet: number | null;

  @Column("datetime", { name: "DINIZIO", nullable: true })
  dinizio: Date | null;

  @Column("datetime", { name: "DFINE", nullable: true })
  dfine: Date | null;

  @Column("int", { name: "IDTECSKILLIST", nullable: true })
  idtecskillist: number | null;

  @Column("int", { name: "BROUTABLE", nullable: true })
  broutable: number | null;

  @Column("int", { name: "NWLRATE", nullable: true })
  nwlrate: number | null;

  @Column("int", { name: "NWLPOSITION", nullable: true })
  nwlposition: number | null;

  @ManyToOne(() => Puuser, (puuser) => puuser.pssinlossadjs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDUSER", referencedColumnName: "iduser" }])
  iduser2: Puuser;

  @OneToMany(() => Pssinvercl, (pssinvercl) => pssinvercl.idlossadj2)
  pssinvercls: Pssinvercl[];
}
