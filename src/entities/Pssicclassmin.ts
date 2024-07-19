import { Column, Entity, OneToMany } from "typeorm";
import { Pssincl } from "./Pssincl";

@Entity("pssicclassmin", { schema: "rgidb" })
export class Pssicclassmin {
  @Column("int", { primary: true, name: "IDCLASSMIN" })
  idclassmin: number;

  @Column("varchar", { name: "CDESCR", nullable: true, length: 50 })
  cdescr: string | null;

  @Column("varchar", { name: "CCOD", nullable: true, length: 6 })
  ccod: string | null;

  @Column("int", { name: "CABBREVIATION", nullable: true })
  cabbreviation: number | null;

  @Column("datetime", { name: "DINIZIO", nullable: true })
  dinizio: Date | null;

  @Column("int", { name: "DFINE", nullable: true })
  dfine: number | null;

  @OneToMany(() => Pssincl, (pssincl) => pssincl.idclassmin2)
  pssincls: Pssincl[];
}
