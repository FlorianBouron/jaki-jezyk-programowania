/* eslint-disable max-len */

const labels = ['2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12'];
const lastYearLabels = ['2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12'];

const top10GithubProjects = [
  {
    data: [27115, 27926, 29522, 30196, 31299, 33053, 34450, 35433, 36919, 38744, 39778, 40966, 41892],
    label: 'java-design-patterns (Java)',
  },
  {
    data: [80335, 83984, 88811, 91086, 94654, 98512, 102151, 104195, 106665, 109056, 111209, 113685, 115669],
    label: 'tensorflow (C++)',
  },
  {
    data: [2783, 2835, 2919, 2965, 3019, 3080, 3157, 3208, 3262, 3312, 3363, 3440, 3485],
    label: 'ggplot2 (R)',
  },
  {
    data: [52645, 53501, 55238, 55902, 57070, 58356, 59465, 60391, 61461, 62793, 64185, 65450, 66419],
    label: 'linux (C)',
  },
  {
    data: [291488, 291552, 291613, 291661, 291863, 292151, 292241, 292602, 293314, 294006, 294275, 296174, 296302],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [36621, 37182, 39103, 40622, 41729, 42680, 43526, 44099, 44750, 45523, 46134, 46913, 47528],
    label: 'laravel (PHP)',
  },
  {
    data: [26104, 26381, 26871, 27092, 27434, 27783, 28125, 28325, 28621, 28896, 29126, 29407, 29613],
    label: 'Alamofire (Swift)',
  },
  {
    data: [16330, 17128, 18615, 19226, 20589, 21983, 23334, 24267, 25453, 27029, 28030, 29198, 30116],
    label: 'shadowsocks-windows (C#)',
  },
  {
    data: [37866, 38099, 38587, 38830, 39150, 39540, 39844, 40089, 40412, 40778, 41008, 41311, 41513],
    label: 'rails (Ruby)',
  },
  {
    data: [41931, 43095, 45229, 46189, 47810, 49405, 50940, 52093, 53392, 54884, 55785, 57061, 58116],
    label: 'awesome-python (Python)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [3209, 3227, 3251, 3260, 3281, 3307, 3331, 3344, 3368, 3388, 3398, 3421, 3434],
    label: 'ML_for_Hackers',
  },
  {
    data: [2783, 2835, 2919, 2965, 3019, 3080, 3157, 3208, 3262, 3312, 3363, 3440, 3485],
    label: 'ggplot2',
  },
  {
    data: [2588, 2622, 2697, 2739, 2792, 2842, 2890, 2926, 2965, 3028, 3062, 3108, 3146],
    label: 'shiny',
  },
  {
    data: [2553, 2606, 2718, 2758, 2822, 2921, 2979, 3029, 3074, 3133, 3159, 3216, 3262],
    label: 'awesome-R',
  },
  {
    data: [2389, 2412, 2458, 2483, 2514, 2555, 2595, 2619, 2647, 2679, 2701, 2740, 2756],
    label: 'swirl-courses',
  },
  {
    data: [2298, 2326, 2384, 2409, 2444, 2485, 2529, 2563, 2602, 2644, 2669, 2703, 2726],
    label: 'AnomalyDetection',
  },
  {
    data: [2089, 2115, 2196, 2233, 2310, 2363, 2403, 2454, 2497, 2533, 2607, 2686, 2715],
    label: 'dplyr',
  },
  {
    data: [1606, 1611, 1619, 1621, 1627, 1632, 1635, 1652, 1660, 1666, 1667, 1672, 1676],
    label: 'investing',
  },
  {
    data: [1575, 1588, 1607, 1621, 1631, 1640, 1644, 1653, 1678, 1697, 1710, 1726, 1741],
    label: 'devtools',
  },
  {
    data: [1463, 1485, 1514, 1530, 1550, 1566, 1579, 1595, 1613, 1633, 1647, 1668, 1675],
    label: 'knitr',
  },
];

langToProjects.Swift = [
  {
    data: [26104, 26381, 26871, 27092, 27434, 27783, 28125, 28325, 28621, 28896, 29126, 29407, 29613],
    label: 'Alamofire',
  },
  {
    data: [22855, 23224, 23985, 24284, 24834, 25474, 26036, 26431, 26895, 27391, 27767, 28364, 28808],
    label: 'awesome-ios',
  },
  {
    data: [18125, 18216, 18367, 18419, 18546, 18682, 18771, 18854, 18916, 19000, 19058, 19137, 19174],
    label: 'ReactiveCocoa',
  },
  {
    data: [16566, 16816, 17263, 17441, 17780, 18118, 18437, 18628, 18860, 19145, 19316, 19555, 19787],
    label: 'Charts',
  },
  {
    data: [15928, 16088, 16373, 16463, 16658, 16845, 17016, 17146, 17274, 17412, 17525, 17655, 17764],
    label: 'SwiftyJSON',
  },
  {
    data: [15236, 15515, 16070, 16246, 16619, 17025, 17350, 17607, 17881, 18180, 18382, 18703, 18940],
    label: 'swift-algorithm-club',
  },
  {
    data: [15011, 15314, 15744, 15884, 16791, 17163, 17499, 17734, 17941, 18179, 18363, 18599, 18762],
    label: 'open-source-ios-apps',
  },
  {
    data: [13416, 13585, 13863, 13987, 14211, 14484, 14817, 14994, 15217, 15459, 15637, 15981, 16145],
    label: 'awesome-swift',
  },
  {
    data: [12444, 12520, 12658, 12702, null, null, null, null, null, null, null, null, null],
    label: 'Perfect',
  },
  {
    data: [12437, 12501, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SwiftGuide',
  },
  {
    data: [null, null, 12584, 12874, 13197, 13619, 14058, 14307, 14534, 14795, 15022, 15222, null],
    label: 'vapor',
  },
  {
    data: [null, null, null, null, 13068, 13519, 13863, 14137, 14430, 14769, null, null, 15436],
    label: 'Hero',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 15117, 15873, 16474],
    label: 'ShadowsocksX-NG',
  },
];

langToProjects['C#'] = [
  {
    data: [16330, 17128, 18615, 19226, 20589, 21983, 23334, 24267, 25453, 27029, 28030, 29198, 30116],
    label: 'shadowsocks-windows',
  },
  {
    data: [12984, 13110, 13367, 13478, 13666, 13892, 14114, 14281, 14538, 14738, 14889, 15084, 15238],
    label: 'corefx',
  },
  {
    data: [11852, 12365, 13191, 13578, 14147, 14856, 15476, 15862, 16260, 16647, 16974, 17432, 17800],
    label: 'CodeHub',
  },
  {
    data: [8689, 8783, 8923, 9001, 9134, 9269, 9394, 9504, 9667, 9871, 9997, 10468, 10573],
    label: 'coreclr',
  },
  {
    data: [8505, 8607, 8829, 8932, 9076, 9259, 9410, 9517, 9673, 9806, 10056, 10311, 10419],
    label: 'roslyn',
  },
  {
    data: [8489, 8698, 9380, 9569, 9863, 10145, 10434, 10616, 10890, 11155, 11393, 11668, 11842],
    label: 'PowerShell',
  },
  {
    data: [7639, 7673, 7780, 8165, 8266, 8547, 8592, 8626, 8713, 8813, 8869, 9046, 10736],
    label: 'WaveFunctionCollapse',
  },
  {
    data: [7601, 7740, 7996, 8110, 8293, 8538, 8772, 8930, 9114, 9359, 9496, 9649, 9795],
    label: 'Dapper',
  },
  {
    data: [7411, 7731, 8310, 8517, 8809, 9139, 9621, 9958, 10375, 10756, 10990, 11220, 11463],
    label: 'Wox',
  },
  {
    data: [6851, null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SignalR',
  },
  {
    data: [null, 6894, 7143, 7265, 7478, 7740, 7983, 8136, 8324, 8490, 8623, 8831, 9061],
    label: 'ShareX',
  },
];

langToProjects.C = [
  {
    data: [52645, 53501, 55238, 55902, 57070, 58356, 59465, 60391, 61461, 62793, 64185, 65450, 66419],
    label: 'linux',
  },
  {
    data: [26484, 26860, 27480, 27724, 28278, 28889, 29472, 29924, 30529, 31280, 31956, 32586, 32995],
    label: 'redis',
  },
  {
    data: [25659, 26400, 27383, 27847, 28545, 29253, 29858, 30342, 30884, 31683, 32123, 32630, 33368],
    label: 'netdata',
  },
  {
    data: [20041, 20371, 20936, 21176, 21619, 22158, 22777, 23144, 23554, 23954, 24333, 24768, 25137],
    label: 'git',
  },
  {
    data: [16674, 16743, 16836, 16880, 16950, 17064, 17187, 17227, 17301, 17408, 17483, 17573, 17646],
    label: 'How-to-Make-a-Computer-Operating-System',
  },
  {
    data: [16560, 16996, 17590, 17794, 18315, 18829, 19334, 19658, 19994, 20405, 20667, 21049, 21358],
    label: 'ijkplayer',
  },
  {
    data: [14151, 14368, 14834, 15015, 15341, 15777, 16281, 16569, 16887, 17268, 17557, 17947, 18287],
    label: 'wrk',
  },
  {
    data: [13905, 14075, 14406, 14600, 14833, 15064, 15288, 15446, 15636, 15900, 16063, 16287, 16561],
    label: 'the_silver_searcher',
  },
  {
    data: [13513, 13737, 14062, 14184, 14348, 14591, 14812, 15003, 15195, 15442, 15605, 15837, 16041],
    label: 'emscripten',
  },
  {
    data: [13450, 14018, 15391, 16199, 16916, 17530, 17982, 18365, 18771, 19242, 19679, 20222, 20663],
    label: 'php-src',
  },
];

langToProjects.Ruby = [
  {
    data: [37866, 38099, 38587, 38830, 39150, 39540, 39844, 40089, 40412, 40778, 41008, 41311, 41513],
    label: 'rails',
  },
  {
    data: [32079, 32469, 33164, 33489, 33790, 34165, 34483, 34715, 35020, 35329, 35578, 35889, 36136],
    label: 'jekyll',
  },
  {
    data: [28771, 28746, 28675, 28633, 28584, 28538, 28456, 28414, 28393, 28356, 28334, 28302, 28267],
    label: 'legacy-homebrew',
  },
  {
    data: [23391, 23647, 24082, 24266, 24522, 24931, 25205, 25439, 25708, 26003, 26224, 26528, 26765],
    label: 'discourse',
  },
  {
    data: [20205, 20379, 20704, 20852, 21086, 21355, 21546, 21691, 21885, 22117, 22277, 22603, 22784],
    label: 'awesome-awesomeness',
  },
  {
    data: [20128, 20231, 20354, 20426, 20534, 20679, 20860, 20978, 21071, 21164, 21238, 21313, 21394],
    label: 'gitlabhq',
  },
  {
    data: [19553, 19949, 20590, 20833, 21219, 21636, 22080, 22329, 22642, 23011, 23284, 23631, 23855],
    label: 'fastlane',
  },
  {
    data: [17958, 18075, 18237, 18315, 18446, 18588, 18725, 18812, 18932, 19061, 19150, 19262, 19378],
    label: 'devise',
  },
  {
    data: [17528, 17680, 17943, 18148, 18318, 18749, 18983, 19213, 19392, 19568, 19719, 19893, 20089],
    label: 'huginn',
  },
  {
    data: [15897, 16499, 16943, 17056, 17402, 17905, 18044, 18402, 18532, 18756, 18907, 19135, 19326],
    label: 'devdocs',
  },
];

langToProjects.PHP = [
  {
    data: [36621, 37182, 39103, 40622, 41729, 42680, 43526, 44099, 44750, 45523, 46134, 46913, 47528],
    label: 'laravel',
  },
  {
    data: [15752, 16105, 16568, 16833, 17125, 17462, 17774, 17984, 18219, 18517, 18744, 18952, 19211],
    label: 'symfony',
  },
  {
    data: [15411, 15512, 15687, 15764, 15927, 16067, 16192, 16273, 16386, 16511, 16583, 16662, 16754],
    label: 'CodeIgniter',
  },
  {
    data: [13788, 13971, 14281, 14415, 14639, 14925, 15156, 15417, 15632, 15805, 15917, 16153, 16289],
    label: 'DesignPatternsPHP',
  },
  {
    data: [12142, 12404, 13631, 14321, 15033, 15604, 16043, 16369, 16725, 17156, 17561, 18025, 18457],
    label: 'Faker',
  },
  {
    data: [11201, 11321, 11523, 11649, 11783, 11917, 12034, 12094, 12182, 12270, 12344, 12444, null],
    label: 'yii2',
  },
  {
    data: [10275, 10553, 11187, 11656, 12094, 12512, 12889, 13123, 13403, 13767, 14062, 14439, 14751],
    label: 'guzzle',
  },
  {
    data: [10257, 10752, 12216, 13074, 13782, 14404, 14867, 15189, 15539, 16035, 16445, 16905, 17321],
    label: 'composer',
  },
  {
    data: [10175, 10298, 10496, null, null, null, null, null, null, null, null, null, null],
    label: 'WordPress',
  },
  {
    data: [10060, null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHPMailer',
  },
  {
    data: [null, 10622, 11673, 11928, 12331, 12817, 13221, 13493, 13854, 14268, 14576, 15026, 15517],
    label: 'SecLists',
  },
  {
    data: [null, null, null, 10836, 11538, 12100, 12587, 12910, 13273, 13738, 14141, 14621, 15030],
    label: 'framework',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null, 12723],
    label: 'monolog',
  },
];

langToProjects['C++'] = [
  {
    data: [80335, 83984, 88811, 91086, 94654, 98512, 102151, 104195, 106665, 109056, 111209, 113685, 115669],
    label: 'tensorflow',
  },
  {
    data: [53570, 54564, 56488, 57251, 58429, 59690, 61033, 62025, 63064, 64284, 65163, 66262, 67146],
    label: 'electron',
  },
  {
    data: [41788, 42105, 42584, 42816, 43193, 43718, 44105, 44391, 44748, 45116, 45384, 45682, 45893],
    label: 'swift',
  },
  {
    data: [32853, 33019, 33231, 33319, 33455, 33659, 33854, 33971, 34108, 34264, 34360, 34509, 34646],
    label: 'nw.js',
  },
  {
    data: [21889, 22499, 23573, 23987, 24858, 25746, 26652, 27345, 28150, 28923, 29429, 30015, 30555],
    label: 'protobuf',
  },
  {
    data: [21557, 22005, 22745, 23017, 23510, 23986, 24415, 24732, 25081, 25471, 25730, 26088, 26364],
    label: 'caffe',
  },
  {
    data: [20356, 23597, 27460, 28625, 30111, 31198, 32245, 32945, 33733, 34541, 35093, 35730, 36202],
    label: 'bitcoin',
  },
  {
    data: [20355, 20478, 20726, 20822, 20966, 21214, 21377, 21491, 21621, 21776, null, null, null],
    label: 'rethinkdb',
  },
  {
    data: [20183, 20875, 22121, 22607, 23398, 24385, 25278, 25896, 26657, 27474, 28064, 28962, 29857],
    label: 'opencv',
  },
  {
    data: [15003, null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'hhvm',
  },
  {
    data: [null, 15091, null, null, null, null, null, null, null, null, 21853, 22155, 22767],
    label: 'tesseract',
  },
  {
    data: [null, null, 33365, 33283, 33242, 33237, 33225, 33204, 33219, 33289, 33311, 33351, 33436],
    label: 'x64dbg',
  },
];

langToProjects.Python = [
  {
    data: [41931, 43095, 45229, 46189, 47810, 49405, 50940, 52093, 53392, 54884, 55785, 57061, 58116],
    label: 'awesome-python',
  },
  {
    data: [32850, 33215, 33957, 34265, 34699, 35165, 35636, 35927, 36324, 37223, 37617, 37985, 38378],
    label: 'httpie',
  },
  {
    data: [32429, 32767, 33566, 34027, 34562, 35149, 35718, 36073, 36562, 36999, 37604, 38434, 38936],
    label: 'thefuck',
  },
  {
    data: [31626, 32447, 33795, 34416, 35472, 36558, 37527, 38318, 40337, 41399, 42319, 43520, 44361],
    label: 'youtube-dl',
  },
  {
    data: [31431, 32017, 33060, 33591, 34319, 35464, 36416, 37087, 37821, 38627, 39141, 39854, 40371],
    label: 'flask',
  },
  {
    data: [30041, 30651, 31675, 32129, 32871, 33658, 34371, 34889, 35531, 36246, 36776, 37411, 37951],
    label: 'django',
  },
  {
    data: [28991, 29461, 30315, 30757, 31449, 32156, 32814, 33290, null, null, null, null, null],
    label: 'requests',
  },
  {
    data: [28042, 28766, 30284, 30934, 31702, 32491, 33358, 33815, 34519, 35194, 35615, 36222, 36684],
    label: 'awesome-machine-learning',
  },
  {
    data: [26977, 27437, 28344, null, null, null, null, null, null, null, null, null, null],
    label: 'ansible',
  },
  {
    data: [24590, null, null, 29072, 31920, 34281, 36419, 37771, 39466, 41075, 42205, 43893, 45216],
    label: 'models',
  },
  {
    data: [null, 30814, 33052, 33893, 34978, 36238, 37613, 39090, 40779, 41823, 42587, 43546, 44626],
    label: 'public-apis',
  },
  {
    data: [null, null, null, null, null, null, null, null, 39500, 46829, 49634, 51418, 52797],
    label: 'system-design-primer',
  },
];

langToProjects.JavaScript = [
  {
    data: [291488, 291552, 291613, 291661, 291863, 292151, 292241, 292602, 293314, 294006, 294275, 296174, 296302],
    label: 'freeCodeCamp',
  },
  {
    data: [82629, 84454, 88059, 89608, 92256, 95084, 97784, 105472, 108031, 110748, 112422, 114422, 116735],
    label: 'react',
  },
  {
    data: [75665, 78187, 83315, 85338, 89057, 93204, 97034, 106211, 109824, 113343, 115498, 118197, 120777],
    label: 'vue',
  },
  {
    data: [70554, 71233, 72447, 72989, 74351, 75455, 76352, 77017, 77766, 78583, 79188, 79943, 80619],
    label: 'd3',
  },
  {
    data: [62601, 63581, 66205, 67136, 68643, 70382, 71819, 72917, 74264, 75740, 76634, 78113, 79084],
    label: 'javascript',
  },
  {
    data: [57634, 57754, 57993, 58096, 58192, 58407, 58582, 58758, 58863, 59060, 59132, 59236, 59298],
    label: 'angular.js',
  },
  {
    data: [56739, 57783, 59669, 60538, 61969, 63390, 64782, 65971, 67127, 68425, 69343, 70593, 71472],
    label: 'react-native',
  },
  {
    data: [47269, 47562, 48034, 48179, 48528, 48853, 49132, null, null, null, null, null, null],
    label: 'jquery',
  },
  {
    data: [43093, 43937, 45380, 46007, 47099, 48451, 49986, 51150, 51967, 53103, 53987, 55072, 55959],
    label: 'node',
  },
  {
    data: [42115, 42563, 43300, null, null, null, null, null, null, null, null, null, null],
    label: 'atom',
  },
  {
    data: [null, null, null, 44298, 46142, 48162, 50143, 51608, 53274, 54969, 56662, 58662, 59961],
    label: 'create-react-app',
  },
  {
    data: [null, null, null, null, null, null, null, 56837, 57091, 57436, 57610, 57818, 58046],
    label: 'Font-Awesome',
  },
];

langToProjects.Java = [
  {
    data: [29196, 29778, 30795, 31183, 31925, 32803, 33523, 34031, 34604, 35267, 35628, 36124, 36560],
    label: 'RxJava',
  },
  {
    data: [27115, 27926, 29522, 30196, 31299, 33053, 34450, 35433, 36919, 38744, 39778, 40966, 41892],
    label: 'java-design-patterns',
  },
  {
    data: [27037, 27644, 28671, 29107, 29861, 30721, 31594, 32194, 33183, 34185, 34828, 35811, 36424],
    label: 'elasticsearch',
  },
  {
    data: [25195, 25627, 26316, 26561, 27129, 27694, 28220, 28552, 28993, 29480, 29777, 30203, 30513],
    label: 'retrofit',
  },
  {
    data: [23807, 24283, 25008, 25273, 25798, 26433, 26991, 27417, 27970, 28601, 29027, 29527, 29868],
    label: 'okhttp',
  },
  {
    data: [20595, 21154, 22124, 22512, 23088, 23923, 24641, 25118, 25866, 26732, 27235, 27935, 28361],
    label: 'guava',
  },
  {
    data: [19381, 19855, 20581, 20805, 21322, 22006, 22628, 23032, 23507, 23980, 24296, 24734, 25074],
    label: 'MPAndroidChart',
  },
  {
    data: [19335, 19897, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [19276, 19590, 20081, 20227, null, null, null, null, null, null, null, null, null],
    label: 'butterknife',
  },
  {
    data: [19026, 19494, 20194, 20453, 20979, 21500, 21981, 22305, 22729, null, null, null, null],
    label: 'glide',
  },
  {
    data: [null, null, 20532, 21499, 22810, 24147, 25405, 26287, 27426, 28675, 29549, 30622, 31542],
    label: 'spring-boot',
  },
  {
    data: [null, null, null, null, 21205, 22791, 23526, 23987, 24637, 25760, 26994, 28565, 30510],
    label: 'interviews',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 23417, 23888, 24492, 25065],
    label: 'spring-framework',
  },
];

const tiobeCurrentYear = [
  {
    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    label: 'Java',
  },
  {
    data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3],
    label: 'C++',
  },
  {
    data: [11, 8, 13, 13, 20, 12, 11, 10, 18, 18, 18, 14, 14],
    label: 'R',
  },
  {
    data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    label: 'C',
  },
  {
    data: [6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7],
    label: 'JavaScript',
  },
  {
    data: [8, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
    label: 'PHP',
  },
  {
    data: [20, 11, 16, 16, 12, 15, 19, 15, 11, 15, 15, 10, 12],
    label: 'Swift',
  },
  {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6],
    label: 'C#',
  },
  {
    data: [13, 15, 10, 10, 9, 10, 10, 11, 15, 12, 12, 18, 16],
    label: 'Ruby',
  },
  {
    data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 4, 4],
    label: 'Python',
  },
];

const tiobeLastYear = [
  {
    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    label: 'Java',
  },
  {
    data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    label: 'C++',
  },
  {
    data: [19, 17, 15, 15, 14, 15, 14, 14, 15, 11, 11, 15, 11],
    label: 'R',
  },
  {
    data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    label: 'C',
  },
  {
    data: [8, 8, 7, 7, 8, 8, 7, 7, 8, 7, 7, 6, 6],
    label: 'JavaScript',
  },
  {
    data: [7, 7, 6, 6, 7, 6, 9, 8, 7, 6, 6, 7, 8],
    label: 'PHP',
  },
  {
    data: [12, 13, 12, 12, 10, 12, 13, 12, 11, 13, 13, 16, 20],
    label: 'Swift',
  },
  {
    data: [4, 6, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 5],
    label: 'C#',
  },
  {
    data: [14, 12, 11, 11, 12, 11, 11, 11, 10, 10, 10, 10, 13],
    label: 'Ruby',
  },
  {
    data: [5, 4, 5, 5, 5, 5, 4, 4, 5, 5, 5, 5, 4],
    label: 'Python',
  },
];

const stackQuestions = [
  {
    data: [1348774, 1358424, 1374156, 1382432, 1394568, 1409185, 1423671, 1432827, 1443786, 1455209, 1464829, 1477633, 1486943],
    label: 'Java',
  },
  {
    data: [545862, 549345, 555295, 558461, 563304, 568402, 573292, 576619, 580184, 584153, 587560, 592079, 595819],
    label: 'C++',
  },
  {
    data: [214051, 217129, 222900, 226345, 231095, 236547, 241735, 245702, 249996, 254126, 257668, 262301, 265861],
    label: 'R',
  },
  {
    data: [266386, 268022, 270844, 272333, 274641, 277155, 279448, 280883, 282378, 284205, 285845, 288472, 290731],
    label: 'C',
  },
  {
    data: [1520828, 1534875, 1559520, 1571682, 1588711, 1608449, 1628119, 1642715, 1659746, 1678382, 1692377, 1710091, 1723375],
    label: 'JavaScript',
  },
  {
    data: [1148357, 1155845, 1168609, 1174627, 1183025, 1192587, 1202604, 1209198, 1217114, 1225391, 1231847, 1239948, 1245482],
    label: 'PHP',
  },
  {
    data: [173290, 176042, 181106, 183558, 187466, 191548, 195528, 198237, 201966, 205983, 208711, 211992, 214487],
    label: 'Swift',
  },
  {
    data: [1161535, 1168560, 1180295, 1186110, 1194695, 1204859, 1215507, 1222756, 1231639, 1241167, 1248636, 1257809, 1264796],
    label: 'C#',
  },
  {
    data: [189823, 190530, 192012, 192630, 193510, 194531, 195587, 196420, 197273, 198085, 198761, 199638, 200327],
    label: 'Ruby',
  },
  {
    data: [862460, 874795, 896943, 909274, 926587, 946389, 966368, 981127, 999238, 1018384, 1033045, 1052824, 1068247],
    label: 'Python',
  },
];

const meetupMeetupsLocal = [
  {
    data: [86, 86, 86, 82, 83, 84, 87, 86, 86, 88, 90, 89, 88],
    label: 'Java',
  },
  {
    data: [9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11],
    label: 'C++',
  },
  {
    data: [9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11],
    label: 'C',
  },
  {
    data: [105, 106, 109, 107, 109, 107, 109, 112, 115, 117, 120, 123, 123],
    label: 'JavaScript',
  },
  {
    data: [34, 34, 36, 36, 38, 37, 36, 36, 37, 37, 37, 38, 35],
    label: 'PHP',
  },
  {
    data: [6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
    label: 'Swift',
  },
  {
    data: [29, 30, 31, 30, 30, 29, 29, 30, 31, 31, 32, 33, 33],
    label: 'C#',
  },
  {
    data: [14, 14, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17],
    label: 'Ruby',
  },
  {
    data: [32, 32, 32, 32, 34, 34, 38, 37, 38, 38, 38, 39, 40],
    label: 'Python',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [2082, 2094, 2124, 2124, 2151, 2141, 2170, 2192, 2197, 2201, 2207, 2199, 2212],
    label: 'Java',
  },
  {
    data: [202, 204, 205, 208, 204, 201, 206, 207, 203, 204, 207, 205, 207],
    label: 'C++',
  },
  {
    data: [202, 204, 205, 208, 204, 201, 206, 207, 203, 204, 207, 205, 207],
    label: 'C',
  },
  {
    data: [5246, 5266, 5324, 5339, 5386, 5385, 5428, 5468, 5498, 5557, 5599, 5658, 5711],
    label: 'JavaScript',
  },
  {
    data: [1999, 2009, 2043, 2036, 2047, 2036, 2038, 2043, 2049, 2043, 2040, 2067, 2072],
    label: 'PHP',
  },
  {
    data: [375, 376, 377, 380, 384, 373, 374, 372, 377, 373, 378, 382, 384],
    label: 'Swift',
  },
  {
    data: [796, 799, 798, 798, 800, 796, 815, 823, 830, 829, 831, 836, 842],
    label: 'C#',
  },
  {
    data: [934, 933, 938, 936, 926, 905, 908, 907, 898, 892, 893, 886, 886],
    label: 'Ruby',
  },
  {
    data: [1961, 1969, 2010, 2026, 2046, 2047, 2078, 2082, 2121, 2173, 2192, 2211, 2230],
    label: 'Python',
  },
];

const meetupMembersLocal = [
  {
    data: [48698, 49527, 51802, 52531, 54282, 55751, 57473, 58480, 59956, 61659, 63939, 66035, 67643],
    label: 'Java',
  },
  {
    data: [3202, 3318, 3526, 3622, 3776, 3913, 4020, 4097, 4215, 4314, 4467, 4564, 4688],
    label: 'C++',
  },
  {
    data: [3202, 3318, 3526, 3622, 3776, 3913, 4020, 4097, 4215, 4314, 4467, 4564, 4688],
    label: 'C',
  },
  {
    data: [49983, 50944, 53449, 53987, 56825, 58579, 60237, 61798, 63897, 65751, 68021, 68582, 72236],
    label: 'JavaScript',
  },
  {
    data: [12013, 12266, 12893, 13399, 14100, 14598, 14865, 15284, 15754, 16230, 16663, 17164, 17539],
    label: 'PHP',
  },
  {
    data: [1227, 1241, 1256, 1289, 1317, 1327, 1344, 1362, 1381, 1394, 1413, 1437, 1467],
    label: 'Swift',
  },
  {
    data: [23232, 23466, 24348, 24696, 25478, 25345, 25705, 25936, 26136, 26340, 26679, 27401, 28305],
    label: 'C#',
  },
  {
    data: [5835, 5919, 6083, 6213, 6345, 6436, 6525, 6562, 6622, 6681, 6719, 6856, 6969],
    label: 'Ruby',
  },
  {
    data: [18862, 19189, 20246, 20728, 21696, 22542, 23489, 22642, 23187, 23727, 24629, 25705, 26455],
    label: 'Python',
  },
];

const meetupMembersGlobal = [
  {
    data: [1159440, 1158955, 1194637, 1200995, 1232417, 1256340, 1281077, 1301681, 1325483, 1343828, 1359793, 1381354, 1402451],
    label: 'Java',
  },
  {
    data: [68754, 69799, 72713, 74623, 76354, 77628, 79440, 80724, 81682, 82764, 84298, 86166, 88335],
    label: 'C++',
  },
  {
    data: [68754, 69799, 72713, 74623, 76354, 77628, 79440, 80724, 81682, 82764, 84298, 86166, 88335],
    label: 'C',
  },
  {
    data: [3132069, 3171614, 3265304, 3309805, 3371667, 3436797, 3508470, 3560966, 3621430, 3691204, 3750800, 3808475, 3870772],
    label: 'JavaScript',
  },
  {
    data: [898925, 908892, 930906, 940492, 956202, 971068, 990408, 998701, 1016045, 1023499, 1027914, 1043951, 1053280],
    label: 'PHP',
  },
  {
    data: [153621, 155039, 158195, 158759, 163615, 165844, 169262, 170118, 175067, 178738, 181429, 183364, 186010],
    label: 'Swift',
  },
  {
    data: [348594, 351909, 363748, 368320, 375064, 383242, 392144, 398478, 410257, 418236, 424829, 432958, 442896],
    label: 'C#',
  },
  {
    data: [702606, 705392, 717646, 721082, 729172, 735881, 744565, 747861, 758152, 761266, 762521, 769232, 776667],
    label: 'Ruby',
  },
  {
    data: [1413678, 1435944, 1485334, 1512544, 1549054, 1584760, 1617980, 1644452, 1686978, 1733447, 1771816, 1815162, 1846534],
    label: 'Python',
  },
];

const githubProjects = [
  {
    data: [486955, 495503, 509906, 516717, 528644, 541999, 554608, 563229, 573594, 584310, 593743, 595426, 615754],
    label: 'Java',
  },
  {
    data: [197431, 201192, 208556, 212182, 217839, 224732, 230785, 235008, 240039, 245662, 250045, 256202, 261573],
    label: 'C++',
  },
  {
    data: [28233, 28917, 30052, 30827, 31955, 33312, 34614, 35556, 36603, 37713, 38564, 39743, 40679],
    label: 'R',
  },
  {
    data: [179402, 181945, 186547, 188749, 192354, 196659, 199764, 202270, 205258, 208778, 211448, 215253, 218563],
    label: 'C',
  },
  {
    data: [839824, 853567, 880148, 893003, 913313, 936005, 957023, 972995, 991924, 1012267, 1027392, 1042066, 1064176],
    label: 'JavaScript',
  },
  {
    data: [290242, 293735, 299973, 303121, 307486, 312403, 316930, 320436, 324301, 328703, 332039, 333311, 340161],
    label: 'PHP',
  },
  {
    data: [50317, 51507, 53810, 54794, 56479, 58256, 60098, 61341, 62888, 64576, 65932, 67738, 69150],
    label: 'Swift',
  },
  {
    data: [153359, 156609, 162555, 165452, 169706, 175001, 180218, 183551, 187898, 192911, 197014, 199606, 203497],
    label: 'C#',
  },
  {
    data: [293504, 294369, 295840, 296565, 297585, 298803, 299738, 300421, 301215, 302468, 303223, 304394, 304954],
    label: 'Ruby',
  },
  {
    data: [462470, 472521, 491810, 501319, 516379, 534103, 549781, 561984, 576166, 592303, 604979, 622308, 636645],
    label: 'Python',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1500, 1534, 1596, 1619, 1650, 1690, 1738, 1766, 1802, 1843, 1870, 1902, 1926],
    label: 'Java',
  },
  {
    data: [499, 510, 529, 535, 560, 578, 596, 611, 629, 641, 657, 678, 699],
    label: 'C++',
  },
  {
    data: [13, 15, 16, 17, 17, 19, 20, 22, 23, 23, 23, 24, 25],
    label: 'R',
  },
  {
    data: [442, 451, 479, 490, 504, 520, 536, 546, 559, 574, 590, 610, 627],
    label: 'C',
  },
  {
    data: [3322, 3387, 3482, 3546, 3635, 3739, 3829, 3892, 3956, 4050, 4078, 4161, 4236],
    label: 'JavaScript',
  },
  {
    data: [448, 458, 528, 540, 558, 582, 595, 618, 637, 658, 671, 690, 708],
    label: 'PHP',
  },
  {
    data: [414, 421, 433, 438, 451, 464, 483, 488, 494, 515, 521, 532, 542],
    label: 'Swift',
  },
  {
    data: [237, 243, 258, 269, 274, 287, 303, 312, 320, 335, 344, 352, 361],
    label: 'C#',
  },
  {
    data: [617, 624, 634, 638, 642, 649, 661, 662, 663, 674, 678, 679, 682],
    label: 'Ruby',
  },
  {
    data: [1163, 1207, 1280, 1305, 1352, 1408, 1462, 1499, 1563, 1625, 1658, 1715, 1753],
    label: 'Python',
  },
];

module.exports = {
  githubMoreThen1000Stars,
  githubProjects,
  labels,
  langToProjects,
  lastYearLabels,
  meetupMeetupsGlobal,
  meetupMeetupsLocal,
  meetupMembersGlobal,
  meetupMembersLocal,
  stackQuestions,
  tiobeCurrentYear,
  tiobeLastYear,
  top10GithubProjects,
};
