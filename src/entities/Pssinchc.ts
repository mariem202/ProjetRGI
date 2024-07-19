import { Column, Entity, OneToMany } from "typeorm";
import { Pssinvercl } from "./Pssinvercl";

@Entity("pssinchc", { schema: "rgidb" })
export class Pssinchc {
  @Column("int", { primary: true, name: "IDCHC" })
  idchc: number;

  @Column("varchar", { name: "CCOD", nullable: true, length: 6 })
  ccod: string | null;

  @Column("varchar", { name: "CDESCR", nullable: true, length: 25 })
  cdescr: string | null;

  @Column("varchar", { name: "DINIZIO", nullable: true, length: 7 })
  dinizio: string | null;

  @Column("int", { name: "DFINE", nullable: true })
  dfine: number | null;

  @Column("int", { name: "NLEV", nullable: true })
  nlev: number | null;

  @Column("int", { name: "CCODISVAP", nullable: true })
  ccodisvap: number | null;

  @Column("varchar", { name: "CADDRESS", nullable: true, length: 5 })
  caddress: string | null;

  @Column("int", { name: "CNUMHOUSE", nullable: true })
  cnumhouse: number | null;

  @Column("varchar", { name: "CCITY", nullable: true, length: 5 })
  ccity: string | null;

  @Column("int", { name: "CPOSTCOD", nullable: true })
  cpostcod: number | null;

  @Column("int", { name: "CPROVINCE", nullable: true })
  cprovince: number | null;

  @Column("int", { name: "CCODCOUNTRY", nullable: true })
  ccodcountry: number | null;

  @Column("int", { name: "CCO", nullable: true })
  cco: number | null;

  @Column("int", { name: "CPHONE", nullable: true })
  cphone: number | null;

  @Column("int", { name: "COTHERPHONE", nullable: true })
  cotherphone: number | null;

  @Column("int", { name: "CFAX", nullable: true })
  cfax: number | null;

  @Column("int", { name: "CEMAIL", nullable: true })
  cemail: number | null;

  @Column("int", { name: "BCHCOFFICE", nullable: true })
  bchcoffice: number | null;

  @Column("int", { name: "BROUTABLE", nullable: true })
  broutable: number | null;

  @Column("int", { name: "BVISEXCLUSIVE", nullable: true })
  bvisexclusive: number | null;

  @Column("int", { name: "BMANAGECOMP", nullable: true })
  bmanagecomp: number | null;

  @OneToMany(() => Pssinvercl, (pssinvercl) => pssinvercl.idchc2)
  pssinvercls: Pssinvercl[];
}
