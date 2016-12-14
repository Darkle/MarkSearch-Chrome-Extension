
const googleUrlPatterns = [
  'https://encrypted.google.com/search*psi=*',
  'https://www.google.ad/search*psi=*',
  'https://www.google.ae/search*psi=*',
  'https://www.google.al/search*psi=*',
  'https://www.google.am/search*psi=*',
  'https://www.google.as/search*psi=*',
  'https://www.google.at/search*psi=*',
  'https://www.google.az/search*psi=*',
  'https://www.google.ba/search*psi=*',
  'https://www.google.be/search*psi=*',
  'https://www.google.bf/search*psi=*',
  'https://www.google.bg/search*psi=*',
  'https://www.google.bi/search*psi=*',
  'https://www.google.bj/search*psi=*',
  'https://www.google.bs/search*psi=*',
  'https://www.google.bt/search*psi=*',
  'https://www.google.by/search*psi=*',
  'https://www.google.ca/search*psi=*',
  'https://www.google.cat/search*psi=*',
  'https://www.google.cd/search*psi=*',
  'https://www.google.cf/search*psi=*',
  'https://www.google.cg/search*psi=*',
  'https://www.google.ch/search*psi=*',
  'https://www.google.ci/search*psi=*',
  'https://www.google.cl/search*psi=*',
  'https://www.google.cm/search*psi=*',
  'https://www.google.co.ao/search*psi=*',
  'https://www.google.co.bw/search*psi=*',
  'https://www.google.co.ck/search*psi=*',
  'https://www.google.co.cr/search*psi=*',
  'https://www.google.co.id/search*psi=*',
  'https://www.google.co.il/search*psi=*',
  'https://www.google.co.im/search*psi=*',
  'https://www.google.co.in/search*psi=*',
  'https://www.google.co.je/search*psi=*',
  'https://www.google.co.jp/search*psi=*',
  'https://www.google.co.ke/search*psi=*',
  'https://www.google.co.kr/search*psi=*',
  'https://www.google.co.ls/search*psi=*',
  'https://www.google.co.ma/search*psi=*',
  'https://www.google.co.mw/search*psi=*',
  'https://www.google.co.mz/search*psi=*',
  'https://www.google.co.nz/search*psi=*',
  'https://www.google.co.pn/search*psi=*',
  'https://www.google.co.th/search*psi=*',
  'https://www.google.co.tt/search*psi=*',
  'https://www.google.co.tz/search*psi=*',
  'https://www.google.co.ug/search*psi=*',
  'https://www.google.co.uk/search*psi=*',
  'https://www.google.co.uz/search*psi=*',
  'https://www.google.co.ve/search*psi=*',
  'https://www.google.co.vi/search*psi=*',
  'https://www.google.co.za/search*psi=*',
  'https://www.google.co.zm/search*psi=*',
  'https://www.google.co.zw/search*psi=*',
  'https://www.google.com/search*psi=*',
  'https://www.google.com.af/search*psi=*',
  'https://www.google.com.ag/search*psi=*',
  'https://www.google.com.ai/search*psi=*',
  'https://www.google.com.ar/search*psi=*',
  'https://www.google.com.au/search*psi=*',
  'https://www.google.com.bd/search*psi=*',
  'https://www.google.com.bh/search*psi=*',
  'https://www.google.com.bn/search*psi=*',
  'https://www.google.com.bo/search*psi=*',
  'https://www.google.com.br/search*psi=*',
  'https://www.google.com.bz/search*psi=*',
  'https://www.google.com.co/search*psi=*',
  'https://www.google.com.cu/search*psi=*',
  'https://www.google.com.cy/search*psi=*',
  'https://www.google.com.do/search*psi=*',
  'https://www.google.com.ec/search*psi=*',
  'https://www.google.com.eg/search*psi=*',
  'https://www.google.com.et/search*psi=*',
  'https://www.google.com.fj/search*psi=*',
  'https://www.google.com.gh/search*psi=*',
  'https://www.google.com.gi/search*psi=*',
  'https://www.google.com.gr/search*psi=*',
  'https://www.google.com.gt/search*psi=*',
  'https://www.google.com.hk/search*psi=*',
  'https://www.google.com.jm/search*psi=*',
  'https://www.google.com.kh/search*psi=*',
  'https://www.google.com.kw/search*psi=*',
  'https://www.google.com.kz/search*psi=*',
  'https://www.google.com.lb/search*psi=*',
  'https://www.google.com.lv/search*psi=*',
  'https://www.google.com.ly/search*psi=*',
  'https://www.google.com.mm/search*psi=*',
  'https://www.google.com.mt/search*psi=*',
  'https://www.google.com.mw/search*psi=*',
  'https://www.google.com.mx/search*psi=*',
  'https://www.google.com.my/search*psi=*',
  'https://www.google.com.na/search*psi=*',
  'https://www.google.com.nf/search*psi=*',
  'https://www.google.com.ng/search*psi=*',
  'https://www.google.com.ni/search*psi=*',
  'https://www.google.com.np/search*psi=*',
  'https://www.google.com.om/search*psi=*',
  'https://www.google.com.pa/search*psi=*',
  'https://www.google.com.pe/search*psi=*',
  'https://www.google.com.pg/search*psi=*',
  'https://www.google.com.ph/search*psi=*',
  'https://www.google.com.pk/search*psi=*',
  'https://www.google.com.pl/search*psi=*',
  'https://www.google.com.pr/search*psi=*',
  'https://www.google.com.py/search*psi=*',
  'https://www.google.com.qa/search*psi=*',
  'https://www.google.com.ru/search*psi=*',
  'https://www.google.com.sa/search*psi=*',
  'https://www.google.com.sb/search*psi=*',
  'https://www.google.com.sg/search*psi=*',
  'https://www.google.com.sl/search*psi=*',
  'https://www.google.com.sv/search*psi=*',
  'https://www.google.com.tj/search*psi=*',
  'https://www.google.com.tn/search*psi=*',
  'https://www.google.com.tr/search*psi=*',
  'https://www.google.com.tt/search*psi=*',
  'https://www.google.com.tw/search*psi=*',
  'https://www.google.com.ua/search*psi=*',
  'https://www.google.com.uy/search*psi=*',
  'https://www.google.com.vc/search*psi=*',
  'https://www.google.com.ve/search*psi=*',
  'https://www.google.com.vn/search*psi=*',
  'https://www.google.cv/search*psi=*',
  'https://www.google.cz/search*psi=*',
  'https://www.google.de/search*psi=*',
  'https://www.google.dj/search*psi=*',
  'https://www.google.dk/search*psi=*',
  'https://www.google.dm/search*psi=*',
  'https://www.google.dz/search*psi=*',
  'https://www.google.ee/search*psi=*',
  'https://www.google.es/search*psi=*',
  'https://www.google.fi/search*psi=*',
  'https://www.google.fm/search*psi=*',
  'https://www.google.fr/search*psi=*',
  'https://www.google.ga/search*psi=*',
  'https://www.google.ge/search*psi=*',
  'https://www.google.gg/search*psi=*',
  'https://www.google.gl/search*psi=*',
  'https://www.google.gm/search*psi=*',
  'https://www.google.gp/search*psi=*',
  'https://www.google.gr/search*psi=*',
  'https://www.google.gy/search*psi=*',
  'https://www.google.hn/search*psi=*',
  'https://www.google.hr/search*psi=*',
  'https://www.google.ht/search*psi=*',
  'https://www.google.hu/search*psi=*',
  'https://www.google.ie/search*psi=*',
  'https://www.google.iq/search*psi=*',
  'https://www.google.is/search*psi=*',
  'https://www.google.it/search*psi=*',
  'https://www.google.je/search*psi=*',
  'https://www.google.jo/search*psi=*',
  'https://www.google.jp/search*psi=*',
  'https://www.google.kg/search*psi=*',
  'https://www.google.ki/search*psi=*',
  'https://www.google.kz/search*psi=*',
  'https://www.google.la/search*psi=*',
  'https://www.google.li/search*psi=*',
  'https://www.google.lk/search*psi=*',
  'https://www.google.lt/search*psi=*',
  'https://www.google.lu/search*psi=*',
  'https://www.google.lv/search*psi=*',
  'https://www.google.md/search*psi=*',
  'https://www.google.me/search*psi=*',
  'https://www.google.mg/search*psi=*',
  'https://www.google.mk/search*psi=*',
  'https://www.google.ml/search*psi=*',
  'https://www.google.mn/search*psi=*',
  'https://www.google.ms/search*psi=*',
  'https://www.google.mu/search*psi=*',
  'https://www.google.mv/search*psi=*',
  'https://www.google.mw/search*psi=*',
  'https://www.google.ne/search*psi=*',
  'https://www.google.ne.jp/search*psi=*',
  'https://www.google.nl/search*psi=*',
  'https://www.google.no/search*psi=*',
  'https://www.google.nr/search*psi=*',
  'https://www.google.nu/search*psi=*',
  'https://www.google.off.ai/search*psi=*',
  'https://www.google.ph/search*psi=*',
  'https://www.google.pl/search*psi=*',
  'https://www.google.pn/search*psi=*',
  'https://www.google.ps/search*psi=*',
  'https://www.google.pt/search*psi=*',
  'https://www.google.ro/search*psi=*',
  'https://www.google.rs/search*psi=*',
  'https://www.google.ru/search*psi=*',
  'https://www.google.rw/search*psi=*',
  'https://www.google.sc/search*psi=*',
  'https://www.google.se/search*psi=*',
  'https://www.google.sg/search*psi=*',
  'https://www.google.sh/search*psi=*',
  'https://www.google.si/search*psi=*',
  'https://www.google.sk/search*psi=*',
  'https://www.google.sm/search*psi=*',
  'https://www.google.sn/search*psi=*',
  'https://www.google.so/search*psi=*',
  'https://www.google.st/search*psi=*',
  'https://www.google.td/search*psi=*',
  'https://www.google.tg/search*psi=*',
  'https://www.google.tk/search*psi=*',
  'https://www.google.tl/search*psi=*',
  'https://www.google.tl/search*psi=*',
  'https://www.google.tm/search*psi=*',
  'https://www.google.tn/search*psi=*',
  'https://www.google.to/search*psi=*',
  'https://www.google.tt/search*psi=*',
  'https://www.google.us/search*psi=*',
  'https://www.google.vg/search*psi=*',
  'https://www.google.vn/search*psi=*',
  'https://www.google.vu/search*psi=*',
  'https://www.google.ws/search*psi=*'
]

export {
  googleUrlPatterns
}