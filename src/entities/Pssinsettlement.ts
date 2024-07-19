import { Column, Entity, OneToMany } from "typeorm";
import { Pssinclset } from "./Pssinclset";

@Entity("pssinsettlement", { schema: "rgidb" })
export class Pssinsettlement {
  @Column("int", { primary: true, name: "IDSET" })
  idset: number;

  @Column("int", { name: "ETYPEMOVSET", nullable: true })
  etypemovset: number | null;

  @Column("varchar", { name: "DLOAD", nullable: true, length: 7 })
  dload: string | null;

  @Column("varchar", { name: "DOFFERDATE", nullable: true, length: 7 })
  dofferdate: string | null;

  @Column("int", { name: "NAMTTOT", nullable: true })
  namttot: number | null;

  @Column("varchar", { name: "DCOLL", nullable: true, length: 7 })
  dcoll: string | null;

  @Column("int", { name: "ETYPEPAYM", nullable: true })
  etypepaym: number | null;

  @Column("int", { name: "ETYPETECHSET", nullable: true })
  etypetechset: number | null;

  @Column("int", { name: "CNUMOFFER", nullable: true })
  cnumoffer: number | null;

  @Column("int", { name: "ETYPEOFFER", nullable: true })
  etypeoffer: number | null;

  @Column("int", { name: "ESTATUS", nullable: true })
  estatus: number | null;

  @Column("int", { name: "NLEGALCOST", nullable: true })
  nlegalcost: number | null;

  @Column("int", { name: "NFEEMNG", nullable: true })
  nfeemng: number | null;

  @Column("int", { name: "CREASCANC", nullable: true })
  creascanc: number | null;

  @Column("int", { name: "DCANC", nullable: true })
  dcanc: number | null;

  @Column("varchar", { name: "DPAYEMENT", nullable: true, length: 7 })
  dpayement: string | null;

  @Column("int", { name: "IDACCTR", nullable: true })
  idacctr: number | null;

  @Column("int", { name: "BNETDED", nullable: true })
  bnetded: number | null;

  @Column("int", { name: "ETYPESETACC", nullable: true })
  etypesetacc: number | null;

  @Column("int", { name: "BACCEPTED", nullable: true })
  baccepted: number | null;

  @Column("int", { name: "DRETURN", nullable: true })
  dreturn: number | null;

  @Column("int", { name: "BOFFERSEPARATED", nullable: true })
  bofferseparated: number | null;

  @Column("int", { name: "EPAYMNGMNT", nullable: true })
  epaymngmnt: number | null;

  @Column("int", { name: "EORGPAYM", nullable: true })
  eorgpaym: number | null;

  @Column("varchar", { name: "DINSOFFER", nullable: true, length: 7 })
  dinsoffer: string | null;

  @Column("varchar", { name: "DINSSET", nullable: true, length: 7 })
  dinsset: string | null;

  @Column("int", { name: "CCODORGPAYM", nullable: true })
  ccodorgpaym: number | null;

  @Column("int", { name: "NTOTAMTSHARE", nullable: true })
  ntotamtshare: number | null;

  @Column("int", { name: "NLEGALCOSTSHARE", nullable: true })
  nlegalcostshare: number | null;

  @Column("int", { name: "IDUSEROFFER", nullable: true })
  iduseroffer: number | null;

  @Column("int", { name: "IDUSERSET", nullable: true })
  iduserset: number | null;

  @Column("int", { name: "CNOTEPAG", nullable: true })
  cnotepag: number | null;

  @Column("int", { name: "NVAT", nullable: true })
  nvat: number | null;

  @Column("int", { name: "NWITHHOLDINGTAX", nullable: true })
  nwithholdingtax: number | null;

  @Column("varchar", { name: "CCODCUR", nullable: true, length: 2 })
  ccodcur: string | null;

  @Column("int", { name: "NRATEEXCH", nullable: true })
  nrateexch: number | null;

  @Column("varchar", { name: "DCHANGE", nullable: true, length: 7 })
  dchange: string | null;

  @Column("int", { name: "NAMEQUIV", nullable: true })
  namequiv: number | null;

  @Column("int", { name: "NAMEQUIVQ", nullable: true })
  namequivq: number | null;

  @Column("int", { name: "NEXCAMEQUI", nullable: true })
  nexcamequi: number | null;

  @Column("int", { name: "NEXCAMEQUIQ", nullable: true })
  nexcamequiq: number | null;

  @Column("int", { name: "NAMDIRMANEQUIV", nullable: true })
  namdirmanequiv: number | null;

  @Column("varchar", { name: "CCOUCURCOD", nullable: true, length: 2 })
  ccoucurcod: string | null;

  @Column("int", { name: "NEXCRATECOU", nullable: true })
  nexcratecou: number | null;

  @Column("varchar", { name: "DCOUEXCDATE", nullable: true, length: 7 })
  dcouexcdate: string | null;

  @Column("int", { name: "NAMEQUIVCOU", nullable: true })
  namequivcou: number | null;

  @Column("int", { name: "NAMCOUEQUIVQ", nullable: true })
  namcouequivq: number | null;

  @Column("int", { name: "NAMEXPCOUEQUI", nullable: true })
  namexpcouequi: number | null;

  @Column("int", { name: "NEXAMCOUEQUIQ", nullable: true })
  nexamcouequiq: number | null;

  @Column("int", { name: "NAMDIRMANEQCOU", nullable: true })
  namdirmaneqcou: number | null;

  @Column("int", { name: "BMIGRATO", nullable: true })
  bmigrato: number | null;

  @OneToMany(() => Pssinclset, (pssinclset) => pssinclset.idset2)
  pssinclsets: Pssinclset[];
}
