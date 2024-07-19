import { Column, Entity, OneToMany } from "typeorm";
import { Pssincl } from "./Pssincl";
import { Pssinlossadj } from "./Pssinlossadj";

@Entity("puuser", { schema: "rgidb" })
export class Puuser {
  @Column("int", { primary: true, name: "IDUSER" })
  iduser: number;

  @Column("varchar", { name: "CNAME", nullable: true, length: 20 })
  cname: string | null;

  @Column("varchar", { name: "CPWD", nullable: true, length: 92 })
  cpwd: string | null;

  @Column("varchar", { name: "DPWDMOD", nullable: true, length: 7 })
  dpwdmod: string | null;

  @Column("varchar", { name: "CREALNAME", nullable: true, length: 21 })
  crealname: string | null;

  @Column("varchar", { name: "CEMAIL", nullable: true, length: 40 })
  cemail: string | null;

  @Column("int", { name: "NLEVAUTH", nullable: true })
  nlevauth: number | null;

  @Column("int", { name: "NLEVVIEW", nullable: true })
  nlevview: number | null;

  @Column("varchar", { name: "CPWD1", nullable: true, length: 32 })
  cpwd1: string | null;

  @Column("varchar", { name: "DINIZIO", nullable: true, length: 7 })
  dinizio: string | null;

  @Column("varchar", { name: "DFINE", nullable: true, length: 7 })
  dfine: string | null;

  @Column("int", { name: "BLIMITEDPRDACCESS", nullable: true })
  blimitedprdaccess: number | null;

  @Column("int", { name: "BUSERCL", nullable: true })
  busercl: number | null;

  @Column("int", { name: "BLOSSADJ", nullable: true })
  blossadj: number | null;

  @Column("int", { name: "BEXPERT", nullable: true })
  bexpert: number | null;

  @Column("int", { name: "IDPARTY", nullable: true })
  idparty: number | null;

  @Column("int", { name: "BSALESNETWUSER", nullable: true })
  bsalesnetwuser: number | null;

  @Column("varchar", { name: "CIDENTIFICATIONNUM", nullable: true, length: 5 })
  cidentificationnum: string | null;

  @Column("int", { name: "NLEVAUTH2", nullable: true })
  nlevauth2: number | null;

  @Column("int", { name: "ETYPE", nullable: true })
  etype: number | null;

  @Column("varchar", { name: "DLASTLOGIN", nullable: true, length: 7 })
  dlastlogin: string | null;

  @Column("int", { name: "NTOTLOGINKO", nullable: true })
  ntotloginko: number | null;

  @Column("int", { name: "NLASTLOGINKO", nullable: true })
  nlastloginko: number | null;

  @Column("int", { name: "BFORCECHGPWD", nullable: true })
  bforcechgpwd: number | null;

  @Column("int", { name: "NPOINTERNEXTPSWD", nullable: true })
  npointernextpswd: number | null;

  @Column("int", { name: "IDCATLEVAUTH", nullable: true })
  idcatlevauth: number | null;

  @Column("int", { name: "NLEVAUTHOPER", nullable: true })
  nlevauthoper: number | null;

  @Column("int", { name: "NUWLIMIT", nullable: true })
  nuwlimit: number | null;

  @Column("int", { name: "IDLANGUAGE", nullable: true })
  idlanguage: number | null;

  @Column("int", { name: "ETYPECL", nullable: true })
  etypecl: number | null;

  @Column("int", { name: "ECATEGORY", nullable: true })
  ecategory: number | null;

  @Column("int", { name: "IDUSERFATHER", nullable: true })
  iduserfather: number | null;

  @Column("int", { name: "BMAILNOTIFICATION", nullable: true })
  bmailnotification: number | null;

  @Column("int", { name: "CPHONENUMBER", nullable: true })
  cphonenumber: number | null;

  @Column("int", { name: "BMIGRATED", nullable: true })
  bmigrated: number | null;

  @OneToMany(() => Pssincl, (pssincl) => pssincl.iduser2)
  pssincls: Pssincl[];

  @OneToMany(() => Pssinlossadj, (pssinlossadj) => pssinlossadj.iduser2)
  pssinlossadjs: Pssinlossadj[];
}
