/*
copy(a.split('\n').reduce((res, i) => { const [name] = i.split('.'); return res + `import ${name} from './imgs/068/${i}'; `; }, ''))
copy(a);
a = [...Array(100)].map((i, ind) => { const prefix = '0'.repeat(3 - ind.toString(10).length); return `i${prefix}${ind}`; });

a = (src, ind) => {
const indUpd = `i${'0'.repeat(3 - ind.toString(10).length)}${ind}`;
return `"${indUpd}": {
      src: '',
      id: '${indUpd}',
      order: ${ind},
    },`;
};  

copy([...Array(100)].map(a));
*/

import lico from './imgs/068/lico.png';
import tina from './imgs/068/tina.png';
import nosha from './imgs/068/nosha.png';
import radi from './imgs/068/radi.png';
import vina from './imgs/068/vina.png';
import bg from './imgs/068/bg.png';
import imia from './imgs/068/imia.png';
import sion from './imgs/068/sion.png';
import tverdi from './imgs/068/tverdi.png';
import rab from './imgs/068/rab.png';
import potomstvo from './imgs/068/potomstvo.png';
import nasledstvo from './imgs/068/nasledstvo.png';
import selitsia from './imgs/068/selitsia.png';
import iyda from './imgs/068/iyda.png';
import gorod from './imgs/068/gorod.png';
import sozdanie from './imgs/068/sozdanie.png';
import dvijenie from './imgs/068/dvijenie.png';
import more from './imgs/068/more.png';
import zemlia from './imgs/068/zemlia.png';
import nebesa from './imgs/068/nebesa.png';
import hvala from './imgs/068/hvala.png';
import prenebregat from './imgs/068/prenebregat.png';
import yznik from './imgs/068/yznik.png';
import nishi from './imgs/068/nishi.png';
import vnimat from './imgs/068/vnimat.png';
import ojivlenie from './imgs/068/ojivlenie.png';
import radost from './imgs/068/radost.png';
import kopita from './imgs/068/kopita.png';
import roga from './imgs/068/roga.png';
import telec from './imgs/068/telec.png';
import slavoslovit from './imgs/068/slavoslovit.png';
import voznesenie from './imgs/068/voznesenie.png';
import slavit from './imgs/068/slavit.png';
import vosstanovlenie from './imgs/068/vosstanovlenie.png';
import pomosh from './imgs/068/pomosh.png';
import bedni from './imgs/068/bedni.png';
import pisat from './imgs/068/pisat.png';
import pravednik from './imgs/068/pravednik.png';
import jivyshi from './imgs/068/jivyshi.png';
import kniga from './imgs/068/kniga.png';
import izglajivat from './imgs/068/izglajivat.png';
import pravda from './imgs/068/pravda.png';
import bezzakonie from './imgs/068/bezzakonie.png';
import prilojenie from './imgs/068/prilojenie.png';
import iazva from './imgs/068/iazva.png';
import stradanie from './imgs/068/stradanie.png';
import porajenie from './imgs/068/porajenie.png';
import shater from './imgs/068/shater.png';
import pystoi from './imgs/068/pystoi.png';
import jilishe from './imgs/068/jilishe.png';
import obiatia from './imgs/068/obiatia.png';
import gnev from './imgs/068/gnev.png'
import plamia from './imgs/068/plamia.png'
import iarost from './imgs/068/iarost.png'
import izlivanie from './imgs/068/izlivanie.png'
import navsegda from './imgs/068/navsegda.png'
import rasslablenie from './imgs/068/rasslablenie.png'
import chresla from './imgs/068/chresla.png'
import videnie from './imgs/068/videnie.png'
import mrak from './imgs/068/mrak.png'
import zapadnya from './imgs/068/zapadnya.png';
import pir from './imgs/068/pir.png';
import mir from './imgs/068/mir.png';
import seti from './imgs/068/seti.png';
import trapeza from './imgs/068/trapeza.png';
import yksys from './imgs/068/yksys.png';
import jajda from './imgs/068/jajda.png';
import jelch from './imgs/068/jelch.png';
import pisha from './imgs/068/pisha.png';
import davat from './imgs/068/davat.png';
import nahodka from './imgs/068/nahodka.png';
import yteshenie from './imgs/068/yteshenie.png';
import sostradanie from './imgs/068/sostradanie.png';
import lybov from './imgs/068/lybov.png';
import sokryshenie from './imgs/068/sokryshenie.png';
import bydet from './imgs/068/bydet.png';
import priblijenie from './imgs/068/priblijenie.png';
import skoro from './imgs/068/skoro.png';
import skorb from './imgs/068/skorb.png';
import prizirat from './imgs/068/prizirat.png';
import shedrost from './imgs/068/shedrost.png';
import mnojestvo from './imgs/068/mnojestvo.png';
import milost from './imgs/068/milost.png';
import blago from './imgs/068/blago.png';
import propast from './imgs/068/propast.png';
import zatvor from './imgs/068/zatvor.png';
import puchina from './imgs/068/puchina.png';
import pogloshat from './imgs/068/pogloshat.png';
import stremlenie from './imgs/068/stremlenie.png';
import izbavlenie from './imgs/068/izbavlenie.png';
import chtobi from './imgs/068/chtobi.png';
import izvlekat from './imgs/068/izvlekat.png';
import istina from './imgs/068/istina.png';
import ygodnii from './imgs/068/ygodnii.png';
import slushat from './imgs/068/slushat.png';
import stavit from './imgs/068/stavit.png';
import blagost from './imgs/068/blagost.png';
import velikii from './imgs/068/velikii.png';
import vremya from './imgs/068/vremya.png';
import molitva from './imgs/068/molitva.png';
import pyushii from './imgs/068/pyushii.png';
import pesnya from './imgs/068/pesnya.png';
import vorota from './imgs/068/vorota.png';
import sidenie from './imgs/068/sidenie.png';
import tolkovat from './imgs/068/tolkovat.png';
import pritcha from './imgs/068/pritcha.png';
import delat from './imgs/068/delat.png';
import vretishe from './imgs/068/vretishe.png';
import odejda from './imgs/068/odejda.png';
import vmesto from './imgs/068/vmesto.png';
import vozlagat from './imgs/068/vozlagat.png';
import post from './imgs/068/post.png';
import plakat from './imgs/068/plakat.png';
import padat from './imgs/068/padat.png';
import zloslovie from './imgs/068/zloslovie.png';
import sned from './imgs/068/sned.png';
import revnost from './imgs/068/revnost.png';
import mat from './imgs/068/mat.png';
import sin from './imgs/068/sin.png';
import postoronnui from './imgs/068/postoronnui.png';
import brat from './imgs/068/brat.png';
import chyjoi from './imgs/068/chyjoi.png';
import bezumie from './imgs/068/bezumie.png';
import bistryi from './imgs/068/bistryi.png';
import bj from './imgs/068/bj.png';
import boloto from './imgs/068/boloto.png';
import bolshoi from './imgs/068/bolshoi.png';
import dolg from './imgs/068/dolg.png';
import dush from './imgs/068/dush.png';
import glaza from './imgs/068/glaza.png';
import gluboki from './imgs/068/gluboki.png';
import golova from './imgs/068/golova.png';
import gortan from './imgs/068/gortan.png';
import greh from './imgs/068/greh.png';
import gryaz from './imgs/068/gryaz.png';
import gsp from './imgs/068/gsp.png';
import idti from './imgs/068/idti.png';
import iskat from './imgs/068/iskat.png';
import iznemojenie from './imgs/068/iznemojenie.png';
import izrael from './imgs/068/izrael.png';
import jele from './imgs/068/jele.png';
import nadejda from './imgs/068/nadejda.png';
import nenavist from './imgs/068/nenavist.png';
import nespravedlivost from './imgs/068/nespravedlivost.png';
import ojidanie from './imgs/068/ojidanie.png';
import otdavat from './imgs/068/otdavat.png';
import otnimat from './imgs/068/otnimat.png';
import ponoshenie from './imgs/068/ponoshenie.png';
import presledovat from './imgs/068/presledovat.png';
import chest from './imgs/068/chest.png';
import pokrov from './imgs/068/pokrov.png';
import sila from './imgs/068/sila.png';
import skrutui from './imgs/068/skrutui.png';
import spasenie from './imgs/068/spasenie.png';
import sram from './imgs/068/sram.png';
import stoyat from './imgs/068/stoyat.png';
import stud from './imgs/068/stud.png';
import suhoi from './imgs/068/suhoi.png';
import techenie from './imgs/068/techenie.png';
import tomitsya from './imgs/068/tomitsya.png';
import yvlechenie from './imgs/068/yvlechenie.png';
import voda from './imgs/068/voda.png';
import volosi from './imgs/068/volosi.png';
import vopl from './imgs/068/vopl.png';
import vrag from './imgs/068/vrag.png';
import znanie from './imgs/068/znanie.png';

import { 
  CreateChilds,
  addTitle,
} from './functions';

const createChilds = CreateChilds();

const i068 = {
  id: 'i068',
  items: [
    'i001',
    'i002',
    'i003',
    'i004',
    'i005',
    'i006',
    'i007',
    'i008',
    'i009',
    'i010',
    'i011',
    'i012',
    'i013',
    'i014',
    'i015',
    'i016',
    'i017',
    'i018',
    'i019',
    'i020',
    'i021',
    'i022',
    'i023',
    'i024',
    'i025',
    'i026',
    'i027',
    'i028',
    'i029',
    'i030',
    'i031',
    'i032',
    'i033',
    'i034',
    'i035',
    'i036',
    'i037',
    'i038',
    'i039',
    'i040',
    'i041',
    'i042',
    'i043',
    'i044',
    'i045',
    'i046',
    'i047',
    'i048',
    'i049',
    'i050',
    'i051',
    'i052',
    'i053',
    'i054',
    'i055',
    'i056',
    'i057',
    'i058',
    'i059',
    'i060',
    'i061',
    'i062',
    'i063',
    'i064',
    'i065',
    'i066',
    'i067',
    'i068',
    'i069',
    'i070',
    'i071',
    'i072',
    'i073',
    'i074',
    'i075',
    'i076',
    'i077',
    'i078',
    'i079',
    'i080',
    'i081',
    'i082',
    'i083',
    'i084',
    'i085',
    'i086',
    'i087',
    'i088',
    'i089',
    'i090',
    'i091',
    'i092',
    'i093',
    'i094',
    'i095',
    'i096',
    'i097',
    'i098',
    'i099',
    "i101",
    "i102",
    "i103",
    "i104",
    "i105",
    "i106",
    "i107",
    "i108",
    "i109",
    "i110",
    "i111",
    "i112",
    "i113",
    "i114",
    "i115",
    "i116",
    "i117",
    "i118",
    "i119",
    "i120",
    "i121",
    "i122",
    "i123",
    "i124",
    "i125",
    "i126",
    "i127",
    "i128",
    "i129",
    "i130",
    "i131",
    "i132",
    "i133",
    "i134",
    "i135",
    "i136",
    "i137",
    "i138",
    "i139",
    "i140",
    "i141",
    "i142",
    "i143",
    "i144",
    "i145",
    "i146",
    "i147",
    "i148",
    "i149",
    "i150",
    "i151",
    "i152",
    "i153",
    "i154",
    "i155",
    "i156",
    "i157",
    "i158",
    "i159",
    "i160",
    "i161",
    "i162",
    "i163",
    "i164",
    "i165",
    "i166",
    "i167",
    "i168",
    "i169",
    "i170",
    "i171",
    "i172",
    "i173",
    "i174",
    "i175",
    "i176",
    "i177",
    "i178",
    "i179",
    "i180",
    "i181",
    "i182",
    "i183",
    "i184",
    "i185",
    "i186",
    "i187",
    "i188",
    "i189",
    "i190",
    "i191",
    "i192",
    "i193",
    "i194",
    "i195",
    "i196",
    "i197",
    "i198",
    "i199",
    "i200",
    "i201",
    "i202",
    "i203",
    "i204",
    "i205",
    "i206",
    "i207",
    "i208",
    "i209",
    "i210",
    "i211",
    "i212",
    "i213",
    "i214",
    "i215",
    "i216",
    "i217",
    "i218",
    "i219",
    "i220",
    "i221",
    "i222",
    "i223",
    "i224",
    "i225",
    "i226",
    "i227",
    "i228",
    "i229",
    "i230",
    "i231",
    "i232",
    "i233",
    "i234",
    "i235",
    "i236",
    "i237",
    "i238",
    "i239",
    "i240",
    "i241",
    "i242",
    "i243",
    "i244",
    "i245",
    "i246",
    "i247",
    "i248",
    "i249",
    "i250",
    "i251",
    "i252",
    "i253",
    "i254",
    "i255",
    "i256",
    "i257",
    "i258",
    "i259",
    "i260",
    "i261",
    "i262",
    "i263",
    "i264",
    "i265",
    "i266",
    "i267",
    "i268",
    "i269",
    "i270",
    "i271",
    "i272",
    "i273",
    "i274",
    "i275",
    "i276",
    "i277",
    "i278",
    "i279",
    "i280",
    "i281",
    "i282",
    "i283",
    "i284",
    "i285",
    "i286",
    "i287",
    "i288",
    "i289",
    "i290",
    "i291",
    "i292",
    "i293",
    "i294",
    "i295",
    "i296",
    "i297",
    "i298",
    "i299"
  ],

  i001: {
    src: spasenie,
    id: 'i001',
    order: 1,
    childs: createChilds({
      items: [bj],
    }),
  },
  i002: {
    src: voda,
    id: 'i002',
    order: 2,
  },
  i003: {
    src: idti,
    id: 'i003',
    order: 3,
  },
  i004: {
    src: dush,
    id: 'i004',
    order: 4,
  },
  i005: {
    src: gryaz,
    id: 'i005',
    order: 5,
  },
  i006: {
    src: gluboki,
    id: 'i006',
    order: 6,
  },
  i007: {
    src: boloto,
    id: 'i007',
    order: 7,
  },
  i008: {
    src: stoyat,
    id: 'i008',
    order: 8,
  },
  i009: {
    src: idti,
    id: 'i009',
    order: 9,
  },
  i010: {
    src: gluboki,
    id: 'i010',
    order: 10,
  },
  i011: {
    src: voda,
    id: 'i011',
    order: 11,
  },
  i012: {
    src: bistryi,
    id: 'i012',
    order: 12,
  },
  i013: {
    src: techenie,
    id: 'i013',
    order: 13,
  },
  i014: {
    src: yvlechenie,
    id: 'i014',
    order: 14,
  },
  i015: {
    src: iznemojenie,
    id: 'i015',
    order: 15,
  },
  i016: {
    src: vopl,
    id: 'i016',
    order: 16,
  },
  i017: {
    src: suhoi,
    id: 'i017',
    order: 17,
  },
  i018: {
    src: gortan,
    id: 'i018',
    order: 18,
  },
  i019: {
    src: tomitsya,
    id: 'i019',
    order: 19,
  },
  i020: {
    src: glaza,
    id: 'i020',
    order: 20,
  },
  i021: {
    src: ojidanie,
    id: 'i021',
    order: 21,
    childs: createChilds({
      items: [bg],
    }),
  },
  i022: {
    src: nenavist,
    id: 'i022',
    order: 22,
    childs: createChilds({
      items: [vina],
    }),
  },
  i023: {
    src: bolshoi,
    id: 'i023',
    order: 23,
  },
  i024: {
    src: jele,
    id: 'i024',
    order: 24,
  },
  i025: {
    src: volosi,
    id: 'i025',
    order: 25,
  },
  i026: {
    src: golova,
    id: 'i026',
    order: 26,
  },
  i027: {
    src: vrag,
    id: 'i027',
    order: 27,
  },
  i028: {
    src: presledovat,
    id: 'i028',
    order: 28,
  },
  i029: {
    src: nespravedlivost,
    id: 'i029',
    order: 29,
  },
  i030: {
    src: sila,
    id: 'i030',
    order: 30,
  },
  i031: {
    src: otnimat,
    id: 'i031',
    order: 31,
  },
  i032: {
    src: dolg,
    id: 'i032',
    order: 32,
  },
  i033: {
    src: otdavat,
    id: 'i033',
    order: 33,
    childs: createChilds({
      items: [bj],
    }),
  },
  i034: {
    src: znanie,
    id: 'i034',
    order: 34,
  },
  i035: {
    src: bezumie,
    id: 'i035',
    order: 35,
  },
  i036: {
    src: greh,
    id: 'i036',
    order: 36,
  },
  i037: {
    src: skrutui,
    id: 'i037',
    order: 37,
  },
  i038: {
    src: stud,
    id: 'i038',
    order: 38,
  },
  i039: {
    src: nadejda,
    id: 'i039',
    order: 39,
  },
  i040: {
    src: gsp,
    id: 'i040',
    order: 40,
    childs: createChilds({
      items: [bj, sila],
    }),
  },
  i041: {
    src: sram,
    id: 'i041',
    order: 41,
  },
  i042: {
    src: iskat,
    id: 'i042',
    order: 42,
    childs: createChilds({
      items: [bj],
    }),
  },
  i043: {
    src: izrael,
    id: 'i043',
    order: 43,
    childs: createChilds({
      items: [radi, nosha],
    }),
  },
  i044: {
    src: ponoshenie,
    id: 'i044',
    order: 44,
  },
  i045: {
    src: chest,
    id: 'i045',
    order: 45,
  },
  i046: {
    src: pokrov,
    id: 'i046',
    order: 46,
  },
  i047: {
    src: chyjoi,
    id: 'i047',
    order: 47,
  },
  i048: {
    src: brat,
    id: 'i048',
    order: 48,
  },
  i049: {
    src: postoronnui,
    id: 'i049',
    order: 49,
  },
  i050: {
    src: sin,
    id: 'i050',
    order: 50,
  },
  i051: {
    src: mat,
    id: 'i051',
    order: 51,
  },
  i052: {
    src: revnost,
    id: 'i052',
    order: 52,
  },
  i053: {
    src: sned,
    id: 'i053',
    order: 53,
  },
  i054: {
    src: zloslovie,
    id: 'i054',
    order: 54,
  },
  i055: {
    src: padat,
    id: 'i055',
    order: 55,
  },
  i056: {
    src: plakat,
    id: 'i056',
    order: 56,
  },
  i057: {
    src: post,
    id: 'i057',
    order: 57,
  },
  i058: {
    src: dush,
    id: 'i058',
    order: 58,
  },
  i059: {
    src: stavit,
    id: 'i059',
    order: 59,
  },
  i060: {
    src: ponoshenie,
    id: 'i060',
    order: 60,
  },
  i061: {
    src: vozlagat,
    id: 'i061',
    order: 61,
  },
  i062: {
    src: vmesto,
    id: 'i062',
    order: 62,
  },
  i063: {
    src: odejda,
    id: 'i063',
    order: 63,
  },
  i064: {
    src: vretishe,
    id: 'i064',
    order: 64,
  },
  i065: {
    src: delat,
    id: 'i065',
    order: 65,
  },
  i066: {
    src: pritcha,
    id: 'i066',
    order: 66,
  },
  i067: {
    src: tolkovat,
    id: 'i067',
    order: 67,
  },
  i068: {
    src: sidenie,
    id: 'i068',
    order: 68,
  },
  i069: {
    src: vorota,
    id: 'i069',
    order: 69,
  },
  i070: {
    src: pesnya,
    id: 'i070',
    order: 70,
  },
  i071: {
    src: pyushii,
    id: 'i071',
    order: 71,
  },
  i072: {
    src: molitva,
    id: 'i072',
    order: 72,
    childs: createChilds({
      items: [gsp],
    }),
  },
  i073: {
    src: vremya,
    id: 'i073',
    order: 73,
  },
  i074: {
    src: ygodnii,
    id: 'i074',
    order: 74,
    childs: createChilds({
      items: [bj],
    }),
  },
  i075: {
    src: velikii,
    id: 'i075',
    order: 75,
  },
  i076: {
    src: blagost,
    id: 'i076',
    order: 76,
  },
  i077: {
    src: slushat,
    id: 'i077',
    order: 77,
  },
  i078: {
    src: istina,
    id: 'i078',
    order: 78,
  },
  i079: {
    src: spasenie,
    id: 'i079',
    order: 79,
  },
  i080: {
    src: izvlekat,
    id: 'i080',
    order: 80,
    childs: createChilds({
      items: [tina],
    }),
  },
  i081: {
    src: chtobi,
    id: 'i081',
    order: 81,
  },
  i082: {
    src: gryaz,
    id: 'i082',
    order: 82,
  },
  i083: {
    src: izbavlenie,
    id: 'i083',
    order: 83,
  },
  i084: {
    src: nenavist,
    id: 'i084',
    order: 84,
  },
  i085: {
    src: gluboki,
    id: 'i085',
    order: 85,
    childs: createChilds({
      items: [voda],
    }),
  },
  i086: {
    src: yvlechenie,
    id: 'i086',
    order: 86,
  },
  i087: {
    src: stremlenie,
    id: 'i087',
    order: 87,
    childs: createChilds({
      items: [voda],
    }),
  },
  i088: {
    src: pogloshat,
    id: 'i088',
    order: 88,
  },
  i089: {
    src: puchina,
    id: 'i089',
    order: 89,
  },
  i090: {
    src: zatvor,
    id: 'i090',
    order: 90,
  },
  i091: {
    src: propast,
    id: 'i091',
    order: 91,
  },
  i092: {
    src: slushat,
    id: 'i092',
    order: 92,
  },
  i093: {
    src: gsp,
    id: 'i093',
    order: 93,
  },
  i094: {
    src: blago,
    id: 'i094',
    order: 94,
  },
  i095: {
    src: milost,
    id: 'i095',
    order: 95,
  },
  i096: {
    src: mnojestvo,
    id: 'i096',
    order: 96,
  },
  i097: {
    src: shedrost,
    id: 'i097',
    order: 97,
  },
  i098: {
    src: prizirat,
    id: 'i098',
    order: 98,
  },
  i099: {
    src: skrutui,
    id: 'i099',
    order: 99,
    childs: createChilds({
      items: [lico, rab],
    }),
  },
  i101: {
    src: skorb,
    id: 'i101',
    order: 101,
  },
  i102: {
    src: skoro,
    id: 'i102',
    order: 102,
  },
  i103: {
    src: slushat,
    id: 'i103',
    order: 103,
  },
  i104: {
    src: priblijenie,
    id: 'i104',
    order: 104,
    childs: createChilds({
      items: [dush],
    }),
  },
  i105: {
    src: izbavlenie,
    id: 'i105',
    order: 105,
    childs: createChilds({
      items: [radi],
    }),
  },
  i106: {
    src: vrag,
    id: 'i106',
    order: 106,
  },
  i107: {
    src: spasenie,
    id: 'i107',
    order: 107,
  },
  i108: {
    src: znanie,
    id: 'i108',
    order: 108,
  },
  i109: {
    src: ponoshenie,
    id: 'i109',
    order: 109,
  },
  i110: {
    src: stud,
    id: 'i110',
    order: 110,
  },
  i111: {
    src: sram,
    id: 'i111',
    order: 111,
  },
  i112: {
    src: vrag,
    id: 'i112',
    order: 112,
  },
  i113: {
    src: ponoshenie,
    id: 'i113',
    order: 113,
  },
  i114: {
    src: sokryshenie,
    id: 'i114',
    order: 114,
  },
  i115: {
    src: lybov,
    id: 'i115',
    order: 115,
  },
  i116: {
    src: iznemojenie,
    id: 'i116',
    order: 116,
  },
  i117: {
    src: ojidanie,
    id: 'i117',
    order: 117,
  },
  i118: {
    src: sostradanie,
    id: 'i118',
    order: 118,
  },
  i119: {
    src: yteshenie,
    id: 'i119',
    order: 119,
  },
  i120: {
    src: nahodka,
    id: 'i120',
    order: 120,
  },
  i121: {
    src: davat,
    id: 'i121',
    order: 121,
  },
  i122: {
    src: pisha,
    id: 'i122',
    order: 122,
  },
  i123: {
    src: jelch,
    id: 'i123',
    order: 123,
  },
  i124: {
    src: jajda,
    id: 'i124',
    order: 124,
  },
  i125: {
    src: yksys,
    id: 'i125',
    order: 125,
  },
  i126: {
    src: bydet,
    id: 'i126',
    order: 126,
  },
  i127: {
    src: trapeza,
    id: 'i127',
    order: 127,
  },
  i128: {
    src: seti,
    id: 'i128',
    order: 128,
  },
  i129: {
    src: mir,
    id: 'i129',
    order: 129,
  },
  i130: {
    src: pir,
    id: 'i130',
    order: 130,
  },
  i131: {
    src: zapadnya,
    id: 'i131',
    order: 131,
  },
  i132: {
    src: mrak,
    id: 'i132',
    order: 132,
  },
  i133: {
    src: glaza,
    id: 'i133',
    order: 133,
  },
  i134: {
    src: chtobi,
    id: 'i134',
    order: 134,
  },
  i135: {
    src: videnie,
    id: 'i135',
    order: 135,
  },
  i136: {
    src: chresla,
    id: 'i136',
    order: 136,
  },
  i137: {
    src: rasslablenie,
    id: 'i137',
    order: 137,
  },
  i138: {
    src: navsegda,
    id: 'i138',
    order: 138,
  },
  i139: {
    src: izlivanie,
    id: 'i139',
    order: 139,
  },
  i140: {
    src: iarost,
    id: 'i140',
    order: 140,
  },
  i141: {
    src: plamia,
    id: 'i141',
    order: 141,
  },
  i142: {
    src: gnev,
    id: 'i142',
    order: 142,
  },
  i143: {
    src: obiatia,
    id: 'i143',
    order: 143,
  },
  i144: {
    src: jilishe,
    id: 'i144',
    order: 144,
  },
  i145: {
    src: bydet,
    id: 'i145',
    order: 145,
  },
  i146: {
    src: pystoi,
    id: 'i146',
    order: 146,
  },
  i147: {
    src: shater,
    id: 'i147',
    order: 147,
  },
  i148: {
    src: bydet,
    id: 'i148',
    order: 148,
  },
  i149: {
    src: jivyshi,
    id: 'i149',
    order: 149,
  },
  i150: {
    src: porajenie,
    id: 'i150',
    order: 150,
  },
  i151: {
    src: presledovat,
    id: 'i151',
    order: 151,
  },
  i152: {
    src: stradanie,
    id: 'i152',
    order: 152,
  },
  i153: {
    src: iazva,
    id: 'i153',
    order: 153,
  },
  i154: {
    src: mnojestvo,
    id: 'i154',
    order: 154,
  },
  i155: {
    src: prilojenie,
    id: 'i155',
    order: 155,
  },
  i156: {
    src: bezzakonie,
    id: 'i156',
    order: 156,
  },
  i157: {
    src: idti,
    id: 'i157',
    order: 157,
  },
  i158: {
    src: pravda,
    id: 'i158',
    order: 158,
  },
  i159: {
    src: izglajivat,
    id: 'i159',
    order: 159,
  },
  i160: {
    src: kniga,
    id: 'i160',
    order: 160,
  },
  i161: {
    src: jivyshi,
    id: 'i161',
    order: 161,
  },
  i162: {
    src: pravednik,
    id: 'i162',
    order: 162,
  },
  i163: {
    src: pisat,
    id: 'i163',
    order: 163,
  },
  i164: {
    src: bedni,
    id: 'i164',
    order: 164,
  },
  i165: {
    src: stradanie,
    id: 'i165',
    order: 165,
  },
  i166: {
    src: pomosh,
    id: 'i166',
    order: 166,
    childs: createChilds({
      items: [bj],
    }),
  },
  i167: {
    src: vosstanovlenie,
    id: 'i167',
    order: 167,
  },
  i168: {
    src: bydet,
    id: 'i168',
    order: 168,
  },
  i169: {
    src: slavit,
    id: 'i169',
    order: 169,
    childs: createChilds({
      items: [imia, bg],
    }),
  },
  i170: {
    src: pesnya,
    id: 'i170',
    order: 170,
  },
  i171: {
    src: bydet,
    id: 'i171',
    order: 171,
  },
  i172: {
    src: voznesenie,
    id: 'i172',
    order: 172,
  },
  i173: {
    src: slavoslovit,
    id: 'i173',
    order: 173,
  },
  i174: {
    src: bydet,
    id: 'i174',
    order: 174,
  },
  i175: {
    src: blago,
    id: 'i175',
    order: 175,
  },
  i176: {
    src: ygodnii,
    id: 'i176',
    order: 176,
    childs: createChilds({
      items: [bg],
    }),
  },
  i177: {
    src: jele,
    id: 'i177',
    order: 177,
  },
  i178: {
    src: telec,
    id: 'i178',
    order: 178,
  },
  i179: {
    src: roga,
    id: 'i179',
    order: 179,
  },
  i180: {
    src: kopita,
    id: 'i180',
    order: 180,
  },
  i181: {
    src: videnie,
    id: 'i181',
    order: 181,
  },
  i182: {
    src: stradanie,
    id: 'i182',
    order: 182,
  },
  i183: {
    src: radost,
    id: 'i183',
    order: 183,
  },
  i184: {
    src: ojivlenie,
    id: 'i184',
    order: 184,
  },
  i185: {
    src: lybov,
    id: 'i185',
    order: 185,
  },
  i186: {
    src: iskat,
    id: 'i186',
    order: 186,
    childs: createChilds({
      items: [bg],
    }),
  },
  i187: {
    src: gsp,
    id: 'i187',
    order: 187,
  },
  i188: {
    src: vnimat,
    id: 'i188',
    order: 188,
  },
  i189: {
    src: nishi,
    id: 'i189',
    order: 189,
  },
  i190: {
    src: prenebregat,
    id: 'i190',
    order: 190,
  },
  i191: {
    src: yznik,
    id: 'i191',
    order: 191,
  },
  i192: {
    src: hvala,
    id: 'i192',
    order: 192,
  },
  i193: {
    src: nebesa,
    id: 'i193',
    order: 193,
  },
  i194: {
    src: zemlia,
    id: 'i194',
    order: 194,
  },
  i195: {
    src: more,
    id: 'i195',
    order: 195,
  },
  i196: {
    src: dvijenie,
    id: 'i196',
    order: 196,
  },
  i197: {
    src: spasenie,
    id: 'i197',
    order: 197,
    childs: createChilds({
      items: [bg],
    }),
  },
  i198: {
    src: sion,
    id: 'i198',
    order: 198,
  },
  i199: {
    src: sozdanie,
    id: 'i199',
    order: 199,
  },
  i200: {
    src: gorod,
    id: 'i200',
    order: 200,
  },
  i201: {
    src: iyda,
    id: 'i201',
    order: 201,
  },
  i202: {
    src: selitsia,
    id: 'i202',
    order: 202,
  },
  i203: {
    src: nasledstvo,
    id: 'i203',
    order: 203,
  },
  i204: {
    src: potomstvo,
    id: 'i204',
    order: 204,
  },
  i205: {
    src: rab,
    id: 'i205',
    order: 205,
  },
  i206: {
    src: tverdi,
    id: 'i206',
    order: 206,
  },
  i207: {
    src: lybov,
    id: 'i207',
    order: 207,
  },
  i208: {
    src: imia,
    id: 'i208',
    order: 208,
  },
  i209: {
    src: bydet,
    id: 'i209',
    order: 209,
  },
  i210: {
    src: selitsia,
    id: 'i210',
    order: 210,
  },
  i211: {
    src: '',
    id: 'i211',
    order: 211,
  },
  i212: {
    src: '',
    id: 'i212',
    order: 212,
  },
  i213: {
    src: '',
    id: 'i213',
    order: 213,
  },
  i214: {
    src: '',
    id: 'i214',
    order: 214,
  },
  i215: {
    src: '',
    id: 'i215',
    order: 215,
  },
  i216: {
    src: '',
    id: 'i216',
    order: 216,
  },
  i217: {
    src: '',
    id: 'i217',
    order: 217,
  },
  i218: {
    src: '',
    id: 'i218',
    order: 218,
  },
  i219: {
    src: '',
    id: 'i219',
    order: 219,
  },
  i220: {
    src: '',
    id: 'i220',
    order: 220,
  },
  i221: {
    src: '',
    id: 'i221',
    order: 221,
  },
  i222: {
    src: '',
    id: 'i222',
    order: 222,
  },
  i223: {
    src: '',
    id: 'i223',
    order: 223,
  },
  i224: {
    src: '',
    id: 'i224',
    order: 224,
  },
  i225: {
    src: '',
    id: 'i225',
    order: 225,
  },
  i226: {
    src: '',
    id: 'i226',
    order: 226,
  },
  i227: {
    src: '',
    id: 'i227',
    order: 227,
  },
  i228: {
    src: '',
    id: 'i228',
    order: 228,
  },
  i229: {
    src: '',
    id: 'i229',
    order: 229,
  },
  i230: {
    src: '',
    id: 'i230',
    order: 230,
  },
  i231: {
    src: '',
    id: 'i231',
    order: 231,
  },
  i232: {
    src: '',
    id: 'i232',
    order: 232,
  },
  i233: {
    src: '',
    id: 'i233',
    order: 233,
  },
  i234: {
    src: '',
    id: 'i234',
    order: 234,
  },
  i235: {
    src: '',
    id: 'i235',
    order: 235,
  },
  i236: {
    src: '',
    id: 'i236',
    order: 236,
  },
  i237: {
    src: '',
    id: 'i237',
    order: 237,
  },
  i238: {
    src: '',
    id: 'i238',
    order: 238,
  },
  i239: {
    src: '',
    id: 'i239',
    order: 239,
  },
  i240: {
    src: '',
    id: 'i240',
    order: 240,
  },
  i241: {
    src: '',
    id: 'i241',
    order: 241,
  },
  i242: {
    src: '',
    id: 'i242',
    order: 242,
  },
  i243: {
    src: '',
    id: 'i243',
    order: 243,
  },
  i244: {
    src: '',
    id: 'i244',
    order: 244,
  },
  i245: {
    src: '',
    id: 'i245',
    order: 245,
  },
  i246: {
    src: '',
    id: 'i246',
    order: 246,
  },
  i247: {
    src: '',
    id: 'i247',
    order: 247,
  },
  i248: {
    src: '',
    id: 'i248',
    order: 248,
  },
  i249: {
    src: '',
    id: 'i249',
    order: 249,
  },
  i250: {
    src: '',
    id: 'i250',
    order: 250,
  },
  i251: {
    src: '',
    id: 'i251',
    order: 251,
  },
  i252: {
    src: '',
    id: 'i252',
    order: 252,
  },
  i253: {
    src: '',
    id: 'i253',
    order: 253,
  },
  i254: {
    src: '',
    id: 'i254',
    order: 254,
  },
  i255: {
    src: '',
    id: 'i255',
    order: 255,
  },
  i256: {
    src: '',
    id: 'i256',
    order: 256,
  },
  i257: {
    src: '',
    id: 'i257',
    order: 257,
  },
  i258: {
    src: '',
    id: 'i258',
    order: 258,
  },
  i259: {
    src: '',
    id: 'i259',
    order: 259,
  },
  i260: {
    src: '',
    id: 'i260',
    order: 260,
  },
  i261: {
    src: '',
    id: 'i261',
    order: 261,
  },
  i262: {
    src: '',
    id: 'i262',
    order: 262,
  },
  i263: {
    src: '',
    id: 'i263',
    order: 263,
  },
  i264: {
    src: '',
    id: 'i264',
    order: 264,
  },
  i265: {
    src: '',
    id: 'i265',
    order: 265,
  },
  i266: {
    src: '',
    id: 'i266',
    order: 266,
  },
  i267: {
    src: '',
    id: 'i267',
    order: 267,
  },
  i268: {
    src: '',
    id: 'i268',
    order: 268,
  },
  i269: {
    src: '',
    id: 'i269',
    order: 269,
  },
  i270: {
    src: '',
    id: 'i270',
    order: 270,
  },
  i271: {
    src: '',
    id: 'i271',
    order: 271,
  },
  i272: {
    src: '',
    id: 'i272',
    order: 272,
  },
  i273: {
    src: '',
    id: 'i273',
    order: 273,
  },
  i274: {
    src: '',
    id: 'i274',
    order: 274,
  },
  i275: {
    src: '',
    id: 'i275',
    order: 275,
  },
  i276: {
    src: '',
    id: 'i276',
    order: 276,
  },
  i277: {
    src: '',
    id: 'i277',
    order: 277,
  },
  i278: {
    src: '',
    id: 'i278',
    order: 278,
  },
  i279: {
    src: '',
    id: 'i279',
    order: 279,
  },
  i280: {
    src: '',
    id: 'i280',
    order: 280,
  },
  i281: {
    src: '',
    id: 'i281',
    order: 281,
  },
  i282: {
    src: '',
    id: 'i282',
    order: 282,
  },
  i283: {
    src: '',
    id: 'i283',
    order: 283,
  },
  i284: {
    src: '',
    id: 'i284',
    order: 284,
  },
  i285: {
    src: '',
    id: 'i285',
    order: 285,
  },
  i286: {
    src: '',
    id: 'i286',
    order: 286,
  },
  i287: {
    src: '',
    id: 'i287',
    order: 287,
  },
  i288: {
    src: '',
    id: 'i288',
    order: 288,
  },
  i289: {
    src: '',
    id: 'i289',
    order: 289,
  },
  i290: {
    src: '',
    id: 'i290',
    order: 290,
  },
  i291: {
    src: '',
    id: 'i291',
    order: 291,
  },
  i292: {
    src: '',
    id: 'i292',
    order: 292,
  },
  i293: {
    src: '',
    id: 'i293',
    order: 293,
  },
  i294: {
    src: '',
    id: 'i294',
    order: 294,
  },
  i295: {
    src: '',
    id: 'i295',
    order: 295,
  },
  i296: {
    src: '',
    id: 'i296',
    order: 296,
  },
  i297: {
    src: '',
    id: 'i297',
    order: 297,
  },
  i298: {
    src: '',
    id: 'i298',
    order: 298,
  },
  i299: {
    src: '',
    id: 'i299',
    order: 299,
  },
};

addTitle({
  items: [i068],
});

export {
  i068,
};