// Custom Icons 
// Sceris Icon
var ScanDeptIconData = "133485FF271F80FF252181FF252180FF252180FF262280FF24227FFF1D156FFF7F67ABFF9873B2FF9877B6FF38267EFF1C1589FF29327DFF222183FF231F81FF24217FFF24217FFF281F80FF113482FF251F7EFF3F0068FF330062FF350063FF340063FF340063FF360064FF350065FF2E0062FF2A005FFF29005EFF29006CFF708311FF9FDE00FF819617FF2E006CFF350064FF350064FF370060FF161F6CFF252180FF340062FF320065FF320065FF320065FF320065FF320065FF320065FF320065FF320065FF2A006CFF56522EFFD2F276FFC9DF82FF79823FFF280068FF310064FF310065FF350063FF16216FFF252180FF350064FF320065FF330066FF330066FF330066FF330066FF330066FF330066FF310065FF2D0069FF442D42FFABB970FF958A8EFF38097BFF2E0062FF310065FF320064FF350062FF162170FF252180FF350064FF320065FF330066FF330066FF330066FF330066FF320066FF330065FF320065FF330064FF2D006AFF220060FF22005FFF2F0062FF320065FF320065FF320064FF350062FF16216EFF252181FF350063FF320065FF330066FF330066FF330066FF330066FF320066FF320065FF320064FF29006DFF27006EFF2C006CFF330064FF320065FF320066FF330066FF330064FF350062FF15216EFF24217FFF350064FF320065FF330066FF330066FF330066FF330066FF310066FF310064FF2D0069FF5E5A3AFF87AB13FF6A702EFF2A006CFF320064FF330066FF330066FF330065FF350062FF13216CFF24217EFF360064FF320065FF330066FF330066FF330066FF330066FF310066FF310065FF2C0069FFA4E100FFA9EF00FF646533FF28006DFF320064FF330066FF330066FF330065FF350062FF13216BFF23217EFF370065FF320065FF330066FF330066FF330066FF330066FF310065FF300067FF310365FF9DD700FFA3E000FF3D1C5DFF2E0068FF310066FF330066FF330066FF330065FF340063FF13216BFF24217EFF380065FF320065FF330066FF330066FF330066FF320066FF320064FF2B006BFF4B374BFFAAEE00FF84A315FF230073FF320064FF310066FF330066FF330066FF320065FF350062FF13216DFF24217EFF380065FF320065FF330066FF330066FF330066FF320066FF320064FF27006EFF728125FFA9EE00FF534349FF2A006CFF310065FF320066FF330066FF330066FF320064FF340062FF162170FF23217EFF380065FF320065FF330066FF330066FF330066FF310065FF320064FF2F0767FF97CA03FF99CD06FF300768FF310064FF320065FF330066FF330066FF330066FF310065FF330061FF162170FF24217EFF360065FF320065FF330066FF330066FF330066FF300065FF2A006CFF524345FFACF100FF6E792CFF26006FFF330063FF310066FF330066FF330066FF330066FF320065FF320061FF172170FF1C1879FF2C005EFF26005DFF26005DFF27005EFF2B0062FF330063FF230075FF829F14FFABF000FF432758FF2D0069FF300065FF330066FF330066FF330066FF330066FF320065FF320061FF172170FF51649BFF9F86ABFFA28CADFFA58DADFF9D89AAFF644585FF280064FF39195BFFA5E400FF8FBB0AFF240071FF330063FF310065FF330066FF330066FF330066FF330066FF320065FF320060FF162170FF789BB6FFFFFFFFFF7399C2FF4F7EB2FFD3E8F2FF9A86A5FF1B0067FF6A702CFFAAEE00FF74822BFF250070FF330064FF320066FF330066FF330066FF330066FF330066FF320065FF320060FF16216FFF7293B1FFFFFFFFFF416DA2FF11488CFFB6CBDDFF927CA1FF210061FF93C205FFA3E100FF564843FF2A006BFF320064FF320066FF330066FF330066FF330066FF330066FF320065FF320060FF15216FFF7999B3FFACBDD4FF184C8BFFADBFD2FFBED0DDFF8671A6FF47383DFFABF100FFA9EE00FF4B364EFF2D0069FF330064FF320065FF320065FF320065FF320065FF320065FF310064FF31005FFF15216CFF7897B1FFFCFBFBFF6585ADFFFFFFFFFFFFFFFFFF876E9EFF411F45FF7C8C20FF595235FF28005DFF27005EFF300063FF340063FF340063FF340063FF340063FF350063FF340062FF36005EFF141F6AFF376B9AFF7795AFFF6486A5FF6788A6FF698BA6FF415888FF0E1572FF070A6BFF6C5DA6FF8A72A4FF8877A4FF29286DFF16206FFF172170FF162170FF162171FF172172FF182172FF151F6BFF083475FF";

var ScanDeptIcon = {count: 0,width: 20,height: 20, read: function(nBytes){return ScanDeptIconData.slice(this.count, this.count += nBytes);}};

// Printer Icon
var ScanFolderIconData = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001b355a754e35668c81306ea2b52a689cbf435c71000000000000000000000000000000000a584a5d6f62606a77546568774a6b736a427589043b7dac112274ba3c0e6bd477136ee0b3136ce2d90057cec4236fc7912669aa5e2e70962b396a7d025a7488000000000000000000000000000000004f66576bff6b6973ff57686cff476870ff3c6e83e02e719fc11466ac8d0864cd5a1671e3261069df010034ab00000000000000000000000000000000000000000000000000000000000000000000000055546667ff5c676cff5e636cff615f6bff63616d9c61616b665b5e6566525c5f665c6b6b665a6f6d66465b5966495d5e664e60646659676e66586671664b5e6d5b5f72810659626900000000000000005557696aff566166ff5c616aff605e6aff605e6aff5d5d67ff5e6168ff515b5dff536263ff526765ff4f6462ff55686aff5a6c70ff5b696fff515f6aff4a5d6cff5467764b60697000000000000000004f85827acd7b8081cd79848ccd708394cd6e8596cd6a8295cd6f8799cd70848fcd75868dcd7c8989cd7e8988cd778180cd757e7dcd737e7ecd707c80cd758897cd6477864f6a737b000000000000000055939088ff8f9495ff8b969eff7e92a2ff7e95a6ff7992a4ff7d95a8ff7e929dff77878eff758282ff7c8786ff7a8483ff7e8887ff7e8989ff7e8a8eff798c9bff74879655767f86000000000000000055848c96ff808e91ff7e8f8eff81968fff849992ff7e928dff7e8f8eff828e96ff808b99ff7c899cff7989a1ff768fa6ff7797adff77a1b4ff7ca5b8ff819aabff7c8996557c858d000000000000000055868e99ff859396ff7e908eff788d86ff778c85ff758883ff788888ff77848bff75818fff727e92ff6d7e95ff698198ff67879cff648ea1ff6790a3ff738c9dff73818e5579828a0000000000000000557c8f86ff808e8dff7f8a8eff7d868fff808992ff7c8890ff78888eff768d8cff758c88ff738a84ff728882ff768382ff7a8184ff807e86ff817d8aff6f8291ff6b7e8d55767f86000000000000000055788b82ff788685ff798488ff79828bff7f8891ff79868dff6e7e84ff718887ff718885ff718882ff718680ff748180ff767c80ff7a777fff797583ff6e8190ff6b7e8e55727b8200000000000000005585818aff8c848aff888083ff7c7374ff807779ff817d7fff7a7b7eff70787dff6c7a81ff6a7b85ff6a7b86ff6b7986ff6b7684ff6d7281ff6c7180ff647786ff677a89556e777e000000000000000055848189ff888186ff6d6467ff3b3133ff281f21ff282426ff252629ff1c2429ff18262cff162730ff162733ff182633ff1a2433ff1d2231ff1c2231ff536675ff5e7180556a737a000000000000000055777d80ff707f8aff506776ff19384eff052b3fff083244ff05303fff08333aff083336ff093233ff083233ff073238ff06323eff033347ff043347ff486373ff616d7b5568717800000000000000005573797cff6e7d88ff637a89ff4a697fff4c7286ff517b8dff477181ff4d787fff4d777aff4c7676ff4b7475ff49747aff487581ff46768aff47778bff4f697aff6672805568717800000000000000004f6e8691ff68808bff5e7681ff5b737eff556d78ff5d7580ff5a727dff5b737eff5b737eff5b737eff5b737eff5b737eff5b737eff5b737eff5b737eff6b6b6bff6f6f6f4f6f6f6f00000000000000000958707b7658707b885e768188667e8988627a858861798488607883885c747f885c747f885c747f885c747f885c747f885c747f885c747f885c747f886c6c6c766a6a6a096666660000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

var ScanFolderIcon = {count: 0,width: 20,height: 20, read: function(nBytes){return ScanFolderIconData.slice(this.count, this.count += nBytes);}};

//Clipboar with clock icon
var TBDIconData = "0000000000000000000000000000000000000000000000000000000000000000290414ded20419ecd10017ec270017ed0000000000000000000000000000000000000000000000000000000000000000000000000000000004040e97a10d18a0cc141a90cc0e167ecc153086cc113387e20818e23b0116e93c0019efe20726fccc163392cc19288ccc262797cc2121969f14168d0414168c000000000000000000000000000000002f001af2a5001af1000000000000000099000eea330615f10000000000000000000000000000000033060ce499060ce40000000000000000a50621ef2f011cea0000000000000000000000000000000033011cf4990017ee0000000000000000820210ec900e1df966092b956600238166102080660f1f7f911a1ff8811419f20000000000000000990019e6330015e30000000000000000000000000000000033041eeb99041feb000000000000000008161f955c1c259b661b278f6619258c66242695661a1b915b0e299f080a259b0000000000000000990021f233001ced00000000000000000000000000000000330520ec990520ec000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000990029fa330021f200000000000000000000000000000000331414ef991515f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000990621fa330019f100000000000000000000000000000000331011ec991313ee00000000871b1a72cc1c1d80cc262591cc211f91cc221f92cc0c1e89cc182a94cc1c2593cc1a1e8d871b265f0000000099031ef7330016ef00000000000000000000000000000000330f16f6990c13f3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000990415ee330718f100000000000000000000000000000000330b12f2990c13f300000000440a224a660e1e9366102094661b2785661b278466101f8d6617249f66271fa9662d19a8442a1e5800000000990415ee330213ec0000000000000000000000000000000033001ee899001de800000000441c1b5166142b6f66182a8966171da7661919a5661c188c66221f8a660d2c8c661031874419284b00000000990222e233001bdb0000000000000000000000000000000033001ce7990017e10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a001bdb110018d80000000000000000000000000000000033001fee990124f30000000087211c5ecc122576cc112182cc1b2593cc1e2796cc202b7fcc192478360016ff1c001dffab0d1cf9d80b1af7d8041bffad051dff250f13a700000000000000000000000033001dec990016e500000000000000000000000000000000000000000000000000000000000000001c000dffcf0014ff3c000ae7290817f5290119ff3d0015fbd02528bc1b1b22a20000000000000000330916f9990916f9000000006a012087990318ff99061bff990a1ce1990b1de2960011f411000ef0ab1927c33c0e189e00000000661820966607208c000000003d0913a2a91418c80000000000000000330713f7990814f8000000001d001f86330016fe330318ff330214d9330d1fe4300215f702000bedd90c1ab600000000000000006c18219766122b970000000000000000d80e13c30000000000000000331916f1991714f00000000000000000000000000000000000000000000000000000000000000000d8000daf000000005c0012ddca091ce82316305e0000000000000000d80716c70000000000000000330f0ce7990f0ce80000000000000000000000000000000000000000000000000000000000000000ad1123c53d0518d63d1124f00b0013de00000000000000003e07159eab1423d50000000000000000140913b1d41222dc990617d899041ae999001cf799001df799001df5990219ee990715e795000bd8340a27edd00322de3d041ad000000000000000003e030ab6d02124d1241717c0000000000000000000000000150616d1330919db33091eed330018f333001af4330014ed33051cf1331321f3330413e0120422e71b0423dfa91026dcd80414c3d8101ccaab1820cb241416c300000000";

var TBDIcon = {count: 0,width: 20,height: 20, read: function(nBytes){return TBDIconData.slice(this.count, this.count += nBytes);}};

//Thumbs up icon
//var DEIconData = "0000000000000000000000000000000000000000000000000000000000000000000000000000000048ffc246e9f8b53a5ffcd6830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000048d5be76f7ffe267ffffcb50dce3bd6a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000048e0ca78f7fadb77ffebb93fffffd45ac1e3d285000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000048ebd194f7d9c371ffebcc68ffffd45afcffce5448d8c6790000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000048ffda7ef7fed15effffd95cfff4c344ffffd45398f3c2410000000000000000000000000000000000000000000000000000000000000000000000000656708732266b9933195f8c332a5f6b53c2d0aff7ffde82ffe6b946fff7c94bffffd555ffedbc3a7cffd25133e1cf6f33d9c47a33d9c18033eed69a33e8d69827ccbf8402ffffce0000000000000000a7255d87ff0579caff0074c4ff2c83a0c191//b191fff7c953ffffd051ffffc846ffffc542ffffd04bfff7bb37ffffd259fff3c64dffffdc62ffe5a931fff4b23cffffbe47bcedbe2c01fff75300000000bf38719aff006fbfff0478c9ff116885c1a2c2a2fff5c650fffdc849fffdc643fffec440ffffc642ffffcd49ffecbf46ffffd259ffecb63cffffd45bffffc751fff5b33cfffccd3b1de5c21e00000000bf2c608fff0070c9ff0070caff1d6e88c19ab894fff8cb49fff5c746fff6c84bfff7c74bffffc444ffffc343fffac542fff9c441fffec23cfffec23cfffcc13dffffc84af7e1be4106e7d15d00000000bf2b5f8eff006fc9ff006fc9ff1c6d87c199b793fff7ca48fff5c745fff6c74afff6c64afffec344fffec242fff9c441fff8c440fffdc13cfffdc13bfff1b632fff8be40c5e1bd410000000000000000bf2f5b92ff0b68c5ff0b68c5ff25677ec19db58cfff3cc42fff0c93ffff0c845fff0c845fffec13dfffdc13dfff9c23efff9c13efffbbf3ffffdbe3effffd44ffff1b22e8eecc4770000000000000000bf2d5a91ff0966c3ff0965c3ff23657cc19bb38afff2cb41ffefc83effeec643ffeec643fffcbf3bfffbbf3bfff7c03cfff7bf3cfff9bd3cfffbbc3cfffabc37ffefb02b57eec6790000000000000000bf2a5a8bff0d62bfff0c61beff24607ec19caf8afff0ca40fff3c63bfff1c337fff6c135fffcbd31fffcbd31fff3bf35ff//f3bf35fffdba31fffdba2bfff9b71effffd03721c095560000000000000000bf29598aff0b60beff0a5ebcff225e7cc19aad88ffefc83efff2c53affefc135fff3bf33fffabb2ffffabb2ffff1bd33fff1bd33fffbb82ffffbb829ffffbd24eaf7b51b000000000000000000000000bf2e5a71ff115db0ff0f5bafff245a7cc19ea988fff3c442fff9c039fff8bb30fff8bb30fff7ba30fff5ba31ffe5c035ffe5c034fff7ba20fff6ba20fffabf31b3edb33c000000000000000000000000bf2d5970ff105cafff0e5baeff24597bc19da888fff3c341fff9c038fff7ba2ffff7ba2ffff6b92ffff4b931ffe5bf34ffe4bf33fff6b920fff6b91fffe7ac1e7cf8be47000000000000000000000000ba284f7eff1e5ab5ff0f4ba6ff25505fc1a2aa78ffecc831fff1ba29fff8b82cfff8b72effe4bd3fffe4bc3effe6be26ffebbb26fffbb129fffbaf30fdc5b93833d0c870000000000000000000000000321e4473871652ad881a56b188325d6c7699a26f88ddb82288ecb52588f5b52988f5b52c88e2ba3d88e2ba3c88e4bc2488e9b92488f9af2783f9ad2e40d3c746000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

var DEIcon = {count: 0,width: 20,height: 20, read: function(nBytes){return DEIconData.slice(this.count, this.count += nBytes);}};

//Yellow Document icon
var PatRecIconData = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000232a243469544f586c53504d6c4a47456c5b58596c413d3f6c555253664b4849031e1b1a0000000000000000000000000000000000000000000000000000000000000000000000000000000049555158e7b2aeb1ffe1ddddfff4f1ecfff9f7f1ffeeeaebffe8e4e5fff0ede8feb6b3aec59895900312100b000000000000000000000000000000000000000000000000000000000000000000000000a07d7980ffdbd7daffe0ddddffe8e6e1fff8f5f0fff6f3f4fffffefffff2efeaffcac8c2fffdfaf5c7918f8a0315101e0000000000000000000000000000000000000000000000000000000000000000a6797673ffd9d7cafff6f6e5ffffffeffffefeeafffefeeaffffffebfff4f8ceffe1e5b7ffe1e6b5fff5f9c8cda2a48704302f1f00000000000000000000000000000000000000000000000000000000a66e6b68ffc8c7bafff5f5e4ffffffeefffefeebffffffeafffafae3fff7fad1fffafed0ffbfc392ffe3e8b7ffdbddc0cf84837300000000000000000000000000000000000000000000000000000000a67a786cffd5d4c2//fffbfae8fff7f6eafffffff8fffffffafffffdf7fff3f5d8ffffffe6ffffffe4ffedefd2ffe5e1e8e09d99a000000000000000000000000000000000000000000000000000000000a678766affccccbafff1f1dfffd4d2c7ffcfcdc6ffcbc9c3ffd8d6d1ffdcddc1ffc5c6aaffd3d5b8ffcccdb0fff9f4fbde96929900000000000000000000000000000000000000000000000000000000a6716f69ffd0cfbffff2f2e1ffdfdecfffe3e2d3ffe2e2d1ffe8e8d2ffc2c797ffedf3bdfff7fdc3ffc2c88ffffbfddcde9d9c8b00000000000000000000000000000000000000000000000000000000a678756fffd7d6c6fffcfbebffebeadbfff2f1e2ffe6e5d4ffe7e7d1ffe3e7b8fff2f7c1ffedf3b9ffc7cd94ffe3e5c3de9a9a8900000000000000000000000000000000000000000000000000000000a6736f71ffcfcdc6ffeceae3ffd2d0cbffd2cfcdffe0dcddffd1cecfffdfdecfffd1d0c1ffcecdbeffcac9baffcdc7d5de9994a200000000000000000000000000000000000000000000000000000000a6787476ffd1cfc8ffebe9e3ffcfcdc8ffcecbc9ffe1dedfffd0ccceffdad9caffcecdbeffd9d8c9ffe8e7d8ffdcd6e4dea19ca900000000000000000000000000000000000000000000000000000000a6746f75ffd8d5d3fffffff8fff8f7e8fffffff1fffffff2fffffff2ffffffe8fffbfce1fffcfd//e1fff6f7dcffe1e0d1de93918b00000000000000000000000000000000000000000000000000000000a6736f74ffcecbc9ffedebe4ffd7d6c7ffd9d8c9ffcfcfc0ffe0dfd0ffd4d4bdffdadbc1ffd9dbbfffd5d7bbffd5d4c6de96938e00000000000000000000000000000000000000000000000000000000a6777477ffd2ced0ffedebe5ffd2d2c1ffd1d1c0ffd7d5c9ffdddbd0ffd3d1c7ffd7d5cbffd7d5cbffdbdad0ffd2ced1dea29ea100000000000000000000000000000000000000000000000000000000a66f6b6effd3cfd0fffffef8fff9f8e8fffffff0fffffff4fffaf8edfffcfbf0fffffef4fffffff5fffffff6ffcecacdde969295000000000000000000000000000000000000000000000000000000008b646464ffe1e1e1ffd3d3d3ffccccccffd2d2d2ffd1d1d1ffd3d3d3ffd2d2d2ffcfcfcfffcbcbcbffe0e0e0ffd4d4d4c8808080000000000000000000000000000000000000000000000000000000000b191919a6707070ca7d7d7dcc8d8d8dcc8b8b8bcc8d8d8dcc8e8e8ecc8c8c8ccc8b8b8bcc838383cc8b8b8bbc878787405353530000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000//000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

var PatRecIcon = {count: 0,width: 20,height: 20, read: function(nBytes){return PatRecIconData.slice(this.count, this.count += nBytes);}};

// Microscop Icon data for button
var MicroScopeIconData = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000009e00000018000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005b000000b3000000ff0000002800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d0000000ff000000ff000000ed0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e000000ff000000ff000000ff000000ca0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006a000000ff000000ff000000d30000004c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b6000000ff000000cc00000030000000ac0000008e000000070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b000000f7000000ff00000068000000bb000000ff000000ff0000006500000032000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000ff000000ff00000076000000ab000000ff000000ff00000055000000be000000cc000000180000000000000000000000000000000000000000000000000000000000000000000000000000009c000000ff000000ff000000e20000002300000080000000610000000100000018000000c0000000d30000000b0000000000000000000000000000000000000000000000000000000000000000000000c7000000ff000000ff000000f60000000a000000000000000000000000000000000000000f000000e100000074000000000000000000000000000000000000000000000000000000340000000c0000000f00000058000000a60000008800000000000000000000000000000000000000000000000000000074000000d7000000000000000000000000000000000000000000000006000000eb000000f7000000b6000000670000001a000000000000000000000000000000000000000000000000000000000000003d000000fb000000060000000000000000000000000000000000000000000000080000004a000000c2000000ff000000fe000000c90000004400000000000000000000000000000000000000000000003a000000fd000000070000000000000000000000000000000000000000000000000000000000000058000000f3000000430000008300000046000000000000000000000000000000000000000000000076000000d700000000000000000000000000000000000000000000000000000000000000000000000b000000ec0000008100000000000000000000000000000000000000000000000000000013000000e60000007600000000000000000000000000000000000000000000000000000000000000000000000000000057000000fd00000072000000040000000000000000000000000000001d000000c8000000ce0000000600000000000000000000000000000000000000000000000000000000000000000000002d00000077000000cd000000ff000000d8000000960000007c000000a7000000f6000000fd0000008b0000006700000001000000000000000000000000000000000000000000000000000000000000005f000000cc000000cc000000cc000000cc000000cc000000cc000000cc000000cc000000cc000000cc000000bd0000000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

var MicroScopeIcon = {count: 0, width: 20, height: 20, read: function(nBytes){return MicroScopeIconData.slice(this.count, this.count += nBytes);}};


//THE SECTION BELOW WILL BE ALL THE COMMON FUNCTIONS THAT ALL FILE TYPES WILL REQUIRE 
//Returns users login intiails
var getLoginName = app.trustedFunction(
function () {
 	//Get and return the user's login name
	app.beginPriv();
	return identity.loginName;
	app.EndPriv();
});

var getUserName = app.trustedFunction(
function () {
         //Get and return the user's name
        app.beginPriv();
        return identity.name;
        app.EndPriv();
});

//Create Random number for pdf files without the field Original Accession from AO form
function myIdString(){
	var text = "";
	var possible = "0123456789";
		for (var i = 0; i < 8; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
		return text;
}

//Create Date and Timestamp for file names 
function myDateString(){
	return util.printd("mm.dd-H.MM.ss", new Date()).toUpperCase();
}

//Undo Read Only
function UndoRead(){
	for (var i=0;i < this.numFields; i++){
	var oField = this.getNthFieldName(i);
	oField = this.getField(this.getNthFieldName(i)).readonly = false;
}}


//THE SECTION BELOW IS ALL THE NAMED FUNCTIONS FOR DIFFERENT PROCESSES TO HANDLE AOs
// Function is to create the To Be DE save and button 
var mySaveAsToBeDE = app.trustedFunction(function()
{
	//Create the Alert to confirm submission
	var nToBeDE = app.alert ("Submit form to To Be DE folder? \n\n" + "\\\\uscplatxdfs002p\\ePHI\\To Be DE",2,2);
	//The if statement if they select yes to send to To Be DE folders
	if (nToBeDE == 4){
		//Create Filename
		var myFileName;
		if (this.getField("Original Accession") !== null){
		var myFileName = this.getField("Original Accession").value + " Req " + getLoginName() +" " + myDateString();
		}
		else{
			var myFileName = myIdString() + " Req " + getLoginName() +" " + myDateString();
		}

		//Make all fields read only except the Accession, and CSR req and de fields.
		for (var i=0;i < this.numFields; i++){
			var oField = this.getNthFieldName(i);
			if (oField == "Acsn Label" || oField == "CSR Req Name" || oField == "CSR DE Name"){
			}	
			else{
				oField = this.getField(this.getNthFieldName(i)).readonly = true;
			}
		}

		//Save the File
		app.beginPriv();
		this.saveAs("/uscplatxdfs002p/ePHI/To Be DE/" + myFileName + ".pdf");
		app.endPriv();

		//Closes the file so not to be left open.
		this.closeDoc(true);

		//Open a new Clinical Requisition
		app.openDoc("/US/USData/CompanyShare/Redirected/CPL/USERNAME/Desktop/Clinical Requisition.pdf");
	};

});

// Function is to create the Scanning Folder save 
var mySaveAsScanningFolder = app.trustedFunction(function()
{
	//Create the Alert to confirm submission
	var nScanFolder = app.alert("Submit form to Scanning Dept? \n\n" + "\\\\uscplatxdfs002p\\ePHI\\Scanning",2,2);
	
	//If they select yes to send to folder
	if (nScanFolder == 4){
		//Create Filename
		var myFileName;
		if (this.getField("Original Accession") !== null){
			var myFileName = this.getField("Original Accession").value + " " + this.documentFileName.replace(/\.pdf$/i, " ") + " Cust Scan Folder " + getLoginName() +" " + myDateString();
		}
		else{
			var myFileName = this.documentFileName.replace(/\.pdf$/i, " ") +" Cust Scan Folder " + getLoginName() +" " + myDateString();
		}
	
		//Flatten the page to non fillable fields only
		this.flattenPages();

		//Save the File	
		app.beginPriv();
		this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/Scanning Folder/" + myFileName + " .pdf");
		this.saveAs("/uscplatxdfs002p/ePHI/Scanning/" + myFileName +  " .tif","com.adobe.acrobat.tiff");
		app.endPriv();

		//Closes the file so not to be left open.
		this.closeDoc(true);
	};
});

// Function is to create the Scanning  save 
var mySaveAsScanning = app.trustedFunction(function()
{
	//Flatten the page to non fillable fields only
	this.flattenPages();

	//Save the File	
	app.beginPriv();
	this.saveAs("/uscplatxdfs002p/ePHI/Scanning/" +  this.documentFileName.replace(/\.pdf$/i, "") +" Scan Dept " + getLoginName() +" " + myDateString()+" .tif","com.adobe.acrobat.tiff");
	app.endPriv();

	//Closes the file so not to be left open.
	this.closeDoc(true);
});

// Function is to create the Patient Records save 
var mySaveAsPatientRecords = app.trustedFunction(function()
{

	//Flatten the page to non fillable fields only
	this.flattenPages();

	//Save the File	
	app.beginPriv();
	this.saveAs("/US/USData/CompanyShare/Redirected/CPL/USERNAME/Documents/patient records/" + getLoginName() +" " + myDateString()+" " +  this.documentFileName + ".pdf");
	this.saveAs("/uscplatxdfs002p/ePHI/Scanning/Record Request Forms/" + getLoginName() +" " + myDateString()+" " +  this.documentFileName.replace(/\.pdf$/i, "") +" .tif","com.adobe.acrobat.tiff");
	app.endPriv();

	//Closes the file so not to be left open.
	this.closeDoc(true);

});

// Function is to create the DE Complete save 
var mySaveAsDEComplete = app.trustedFunction(function()
{
	//Flatten the page to non fillable fields only
	this.flattenPages();

	//Save the File	
	app.beginPriv();
	this.saveAs("/uscplatxdfs002p/ePHI/DE Complete/"  + this.documentFileName.replace(/\.pdf$/i, "") +" DE " + getLoginName() + " " + myDateString()+ ".pdf");
	this.saveAs("/uscplatxdfs002p/ePHI/Scanning/ " +  this.documentFileName.replace(/\.pdf$/i, "") +" DE " + getLoginName() + " " + myDateString()+ ".tif","com.adobe.acrobat.tiff");
	app.endPriv();

	//Closes the file so not to be left open.
	this.closeDoc(true);
});

// script to email cytology requisition to cytology department
var Cytology = app.trustedFunction(function(){
	if (this.getField("CytologyC6") === null){
		// Creates alert if incorrect form is being used.
        var CytoReqAlert = app.alert ("You are using the incorrect form for this button \n\n" + "The correct Cytology AO Form will open from the Blank Forms Button",0,0);

    	if (CytoReqAlert == 1){
            app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Cytology Requisition.pdf");
        }; 
	}else{
    	// setting all variables from grabing the accession and emails and the subject line
    	var CytoAccession = this.getField("Original_Accession").value;
    	var CytoEmail = "DistPathSupportProblems@cpllabs.com";
    	var LeadsEmail = "DISTAUSTINCSLEAD@cpllabs.com";
    	var CytoSubLine = "Cyto Addon " + CytoAccession;

    	// the act of emailing the document
    	this.mailDoc({bUI: true, cTo: CytoEmail, cCc: LeadsEmail, cSubject: CytoSubLine});

     	//Closes the file so not to be left open.
     	this.closeDoc(true);
	}
});

// Script to email Stat AOs to EH and send a copy to Scanning.
var StatAO = app.trustedFunction(function(){
    // setting all variables 
    var Original_Accession = this.getField("Original Accession").value;
    var ExceptionHandling = "AustinExceptionHandling@cpllabs.com";
    var StatAOSubLine = "STAT AO " + Original_Accession;

    // Sending a copy to scanning
	app.beginPriv();
	this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/Scanning Folder/"  + Original_Accession + " STAT AO " + getLoginName() +" " + myDateString()+" .pdf");
	// this.saveAs("/uscplatxdfs002p/ePHI/Scanning/ " + Original_Accession +" STAT AO " + getLoginName() +" " + myDateString() +" .tif","com.adobe.acrobat.tiff");
	app.endPriv();

    // setting up the email
    this.mailDoc({bUI: true, cTo: ExceptionHandling, cSubject: StatAOSubLine});

    //Closes the file so not to be left open.
    this.closeDoc(true);
});

// Script to email Path Slide Request
var PathSlide = app.trustedFunction(function(){
	// setting all variables
	var Original_Accession = this.getField("Accession").value;
    var ExceptionHandling = "AustinExceptionHandling@cpllabs.com";
    var PathSlideSubLine = "Path Smear AO " + Original_Accession;

    // setting up the email
    this.mailDoc({bUI: true, cTo: ExceptionHandling, cSubject: PathSlideSubLine});

    //Closes the file so not to be left open.
	this.closeDoc(true);
	
});

// Script to email In Transit AOs 
var InTransitAO = app.trustedFunction(function(){
	// setting all variables
	var Name = this.getField("Last Name").value;
	var DOB = this.getField("DOB").value;
    var CustServEmail = "DistAustinClinicalCustomerService@cpllabs.com";
   	var InTransitSubLine = "In Transit AO " + Name + " " + DOB;
	var InTransitBody = "Hello Team, \n" + "\nPlease help keep an eye for this in transit request for patient \n" + "\n" + Name + " " + DOB;

	// setting up the email
	this.mailDoc({bUI: true, cTo: CustServEmail, cSubject: InTransitSubLine, cMsg: InTransitBody});

	//Closes the file so not to be left open.
	this.closeDoc(true);

});

// Script to email Lymphoma AOs to Heme and send a copy to Scanning.
var LymphomaAO = app.trustedFunction(function(){
    
    if (this.getField("LymphomaFormv1") === null){

         var LymphomaAlert = app.alert ("You are using the incorrect form for this button \n\n" + "The correct Lymphoma AO Form will open from the Blank Forms Button",0,0);

        if (LymphomaAlert == 1){
            app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Lymphoma Forms.pdf");
        };       
    } else {
        // setting all variables 
        var Original_Accession = this.getField("Acsn Label").value;
        var HemeFlow = "disthemellp@cpllabs.com";
        var FlowSmRvAOSubLine = "STAT FLOW/SMRV AO " + Original_Accession;

		var LympFileName = Original_Accession + " Lymphoma Flow/SMRV AO " + getLoginName() + " " + myDateString();

        // Sending a copy to scanning
	    app.beginPriv();
	    this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/Scanning Folder/" + LympFileName +" .pdf");
	    this.saveAs("/uscplatxdfs002p/ePHI/Scanning/ " + LympFileName + " .tif","com.adobe.acrobat.tiff");
	    app.endPriv();

        // setting up the email
        this.mailDoc({bUI: true, cTo: HemeFlow, cSubject: FlowSmRvAOSubLine});

        //Closes the file so not to be left open.
        this.closeDoc(true);
    }
});

//ADDING MENU AND SUBMENUS FOR ALL FUNCTIONS
//Add On Menus
app.addSubMenu({cName:"Add Ons", cParent:"File", nPos:0});
app.addMenuItem({cName:"To Be De", cParent:"Add Ons", cExec:"mySaveAsToBeDE();"});
app.addMenuItem({cName:"Cytology Email", cParent:"Add Ons", cExec:"Cytology();"});
app.addMenuItem({cName:"Stat AO", cParent:"Add Ons", cExec:"StatAO();"});
app.addMenuItem({cName:"In Transit AO", cParent:"Add Ons", cExec:"InTransitAO();"});
app.addMenuItem({cName:"Path Slide Request", cParent:"Add Ons", cExec:"PathSlide();"});
app.addMenuItem({cName:"Lymphoma AO Request", cParent:"Add Ons", cExec:"LymphomaAO();"});
app.addMenuItem({cName:"Scanning Dept", cParent:"Add Ons", cExec:"mySaveAsScanningFolder();"});

var AddOnsMenu = app.trustedFunction(function(){
    var cRtn = app.popUpMenu("To Be DE","Cytology Email","Stat AO","In Transit AO","Path Slide Request","Lymphoma AO Request","Scanning");
    if(cRtn){
        if(cRtn == "To Be DE"){
            mySaveAsToBeDE();
        }else if(cRtn == "Cytology Email"){
            Cytology();
        }else if(cRtn == "Stat AO"){
            StatAO();
        }else if(cRtn == "In Transit AO"){
           InTransitAO();
        }else if(cRtn == "Path Slide Request"){
            PathSlide();
		}else if(cRtn == "Lymphoma AO Request"){
            LymphomaAO();
        }else if(cRtn == "Scanning"){
            mySaveAsScanningFolder();
        }else{
            return;
        }
    }else return;
})

//Adding Scanning Menus
app.addSubMenu({cName:"Scanning Department", cParent:"File", nPos:1});
app.addMenuItem({cName:"Scan w/ Backcopy", cParent:"Scanning Department", cExec:"mySaveAsScanningFolder();"});
app.addMenuItem({cName:"Scan w/o Backcopy", cParent:"Scanning Department", cExec:"mySaveAsScanning();"});

var ScanMenu = app.trustedFunction(function(){
	var sRtn = app.popUpMenu("w/ Backcopy","w/o Backcopy");
	if(sRtn){
		if(sRtn == "w/ Backcopy"){
			mySaveAsScanningFolder();
		}else if(sRtn == "w/o Backcopy"){
			mySaveAsScanning();
		}else{
			return;
		}
	}else return;
})

//THE SECTION BELOW IS FOR ALL THE BUTTONS AND FILE OPTIONS FOR THE ABOVE FUNCTIONS
// Add To Be DE button to toolbar
app.addToolButton({
    cName: "AddOnMenuBtn",
    cLabel: "Add Ons",
    oIcon: TBDIcon,
    cEnable: "event.rc = (app.doc != null);",
    cExec: "AddOnsMenu();"
});

// Add Scanning button toolbar
app.addToolButton({
	cName: "ScanMenuBtn",
	cLabel: "Scanning",
	oIcon: ScanDeptIcon,
	cEnable: "event.rc = (app.doc != null);",
	cExec: "mySaveAsScanningFolder();"
});

//app.addToolButton({
//	cName: "mySaveAsButtonToBeDE",
//	cLabel: "To Be De",
//	oIcon: TBDIcon,
//	cEnable: "event.rc = (app.doc != null);", 
//	cExec: "mySaveAsToBeDE();" 
//});

// Add Scanning Folder button to toolbar
//app.addToolButton({
//	cName: "mySaveAsButtonScanningFolder",
//	cLabel: "Scanning Folder",
//	oIcon: ScanFolderIcon,
//	cEnable: "event.rc = (app.doc != null);", 
//	cExec: "mySaveAsScanningFolder();" 
//});

// Add Patient Records button to toolbar
//app.addToolButton({
//	cName: "mySaveAsButtonPatientRecords",
//	cLabel: "Patient Records",
//	oIcon: PatRecIcon,
//	cEnable: "event.rc = (app.doc != null);", 
//	cExec: "mySaveAsPatientRecords();" 
//});

// Add Scanning button to toolbar
//app.addToolButton({
//	cName: "mySaveAsButtonScanning",
//	cLabel: "Scanning Dept",
//	oIcon: ScanDeptIcon,
//	cEnable: "event.rc = (app.doc != null);", 
//	cExec: "mySaveAsScanning();" 
//});

// Adds Cytology button to the toolbar
//app.addToolButton({
//    cName: "CytologyButton",
//    cLabel: "Cytology Email",
//    oIcon: MicroScopeIcon,
//    cEnable: "event.rc = (app.doc != null);",
//    cExec: "Cytology();"
//});

// Add DE Complete button to toolbar
//app.addToolButton({
//	cName: "mySaveAsButtonDEComplete",
//	cLabel: "DE Complete",
//	oIcon: DEIcon,
//	cEnable: "event.rc = (app.doc != null);", 
//	cExec: "mySaveAsDEComplete();" 
//});

// Add Save To Be DE to the menu to toolbar
//app.addMenuItem({
//	cName: "MySaveAsMenuToBeDE",
//	cUser: "To Be DE",
//	cParent: "File",
//	cExec: "mySaveAsToBeDE()",
//	cEnable: "event.rc = (event.target != null);",
//	nPos: 3
//});

// Add Scanning Folder to the menu to toolbar
//app.addMenuItem({
//	cName: "MySaveAsMenuScanningFolder",
//	cUser: "Scanning Folder",
//	cParent: "File",
//	cExec: "mySaveAsScanningFolder()",
//	cEnable: "event.rc = (event.target != null);",
//	nPos: 4
//});

// Add Patient Records to the menu to toolbar
//app.addMenuItem({
//	cName: "MySaveAsMenuPatientRecords",
//	cUser: "Patient Records",
//	cParent: "File",
//	cExec: "mySaveAsPatientRecords()",
//	cEnable: "event.rc = (event.target != null);",
//	nPos: 4
//});

// Add De Complete to the menu to toolbar
//app.addMenuItem({
//	cName: "MySaveAsMenuDEComplete",
//	cUser: "De Complete",
//	cParent: "File",
//	cExec: "mySaveAsDEComplete()",
//	cEnable: "event.rc = (event.target != null);",
//	nPos: 5
//});

// Add Scanning  to the menu to toolbar
//app.addMenuItem({
//	cName: "MySaveAsMenuScanning",
//	cUser: "Scanning Dept",
//	cParent: "File",
//	cExec: "mySaveAsScanning()",
//	cEnable: "event.rc = (event.target != null);",
//	nPos: 6
//});

// Add Undo Read Only to the menu to toolbar
app.addMenuItem({
	cName: "MySaveAsMenuUndoReadOnly",
	cUser: "Undo Read Only",
	cParent: "File",
	cExec: "UndoRead()",
	cEnable: "event.rc = (event.target != null);",
	nPos: 7
});

// Add Flatten Page to the menu to toolbar
app.addMenuItem({
	cName: "MySaveAsMenuFlattenPage",
	cUser: "Flatten Page",
	cParent: "File",
	cExec: "this.flattenPages()",
	cEnable: "event.rc = (event.target != null);",
	nPos: 8
});
