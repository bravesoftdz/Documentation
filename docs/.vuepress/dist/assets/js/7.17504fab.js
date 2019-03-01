(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{185:function(e,t,i){"use strict";i.r(t);var n=i(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Mining PascalCoin is easy to do with almost any computer. PascalCoin can be mined on Intel and AMD 64-bit CPUs and Nvidia GPUs (currently) using Windows 7/8/10 or Linux. This guide will get you setup to solo mine (mine to your own wallet).")]),e._v(" "),i("p",[e._v("Requirements:")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("It should be noted that RHMiner includes a 1% developer fee to help offset development and maintenance costs. The developer fee is collected by the developer, NOT the PascalCoin organization.")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("The default donation is 1%. The donation is hardcoded in the binaries downloadable on github. This is to help compensate the time it took to R&D, develop, stabilize and optimize this miner and for the upcoming bug fixes and optimizations.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("Pascal wallet - 529692-23")]),e._v(" "),i("p",[e._v("Bitcoin address - 19GfXGpRJfwcHPx2Nf8wHgMps8Eat1o4Jp")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("Some tips for mining in Windows:")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("Go to the releases page of the RHMiner project here: "),i("a",{attrs:{href:"https://github.com/polyminer1/rhminer/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("RHMiner releases"),i("OutboundLink")],1),e._v(" and select either the matching Windows or Linux version of the miner.")]),e._v(" "),i("ul",[e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),i("li",[e._m(14),e._v(" "),i("p",[e._v("You can also download an example batch file to get started, "),i("a",{attrs:{href:"https://github.com/polyminer1/rhminer/blob/master/Release/solomining-mainnet.bat",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1)])])]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),i("p",[e._v("Either create a new file named "),i("code",[e._v("RHMiner.bat")]),e._v(" file in the same folder as RHMiner.exe or get one example bat file from "),i("a",{attrs:{href:"https://github.com/polyminer1/rhminer/tree/master/Release",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(". The file should contain one of the following lines:")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),i("p",[e._v("After that, save and close the .bat file, this is the file you will run to start your miner.")]),e._v(" "),e._m(22),e._v(" "),i("p",[e._v("Follow the steps above, but instead create a simple shell script or start the miner directly with the given arguments.")]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),i("p",[e._v("Pascal wallet - 529692-23")]),e._v(" "),i("p",[e._v("Bitcoin address - 19GfXGpRJfwcHPx2Nf8wHgMps8Eat1o4Jp")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"guide-to-mining-pascalcoin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guide-to-mining-pascalcoin","aria-hidden":"true"}},[this._v("#")]),this._v(" Guide to Mining PascalCoin")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("PascalCoin Wallet")]),this._v(" "),t("li",[this._v("RHMiner or PascalCoinMiner")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("RHMiner developer fee information")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To disable this donation, download and compile locally then use the "),t("code",[this._v("-devfee")]),this._v(' option with chosen donation percentage. "0" will disable the donation.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("For direct donations:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you don't already have the Pascal wallet installed and setup, please see the "),t("a",{attrs:{href:"/get_started"}},[this._v("Getting Started Guide")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prepare-your-wallet-for-mining"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-your-wallet-for-mining","aria-hidden":"true"}},[this._v("#")]),this._v(" Prepare Your Wallet for Mining")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",[i("li",[e._v("In the PascalCoin wallet, go to Project Menu, then Options and set the miner name to anything less than 26 characters.")]),e._v(" "),i("li",[e._v('Check the box "JSON-RPC Server Miner (TCP/IP, no HTTP)"')]),e._v(" "),i("li",[e._v("Make sure the JSON-RPC Port value is set (Default 4009)")]),e._v(" "),i("li",[e._v('Under "Miner Server Private Key", select "Always mine with this key" and select the key you created or any secp256k1 key.')]),e._v(" "),i("li",[e._v("Click the button with green check mark to save the settings.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Disable automatic Windows updates")]),this._v(" "),t("li",[this._v("Change the power setting to high performance and disable the Sleep function")]),this._v(" "),t("li",[this._v('In advanced system settings/performance, select "Adjust for best performance"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"download-rhminer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-rhminer","aria-hidden":"true"}},[this._v("#")]),this._v(" Download RHMiner")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("» "),t("strong",[this._v("CPU only")]),this._v(" - "),t("code",[this._v("rhminer.version.operating-system.CPU.zip")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("» "),t("strong",[this._v("Nvidia Kepler")]),this._v(" - "),t("code",[this._v("rhminer.version.operating-system.Kepler.zip")]),this._v(" (GTX 700 series, Tesla K40/K80)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("» "),t("strong",[this._v("Nvidia Maxwell")]),this._v(" - "),t("code",[this._v("rhminer.version.operating-system.Maxwell.zip")]),this._v(" (GTX 900 series, Quadro M series, GTX Titan X)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("» "),t("strong",[this._v("Nvidia Pascal")]),this._v(" - "),t("code",[this._v("rhminer.version.operating-system.Pascal.zip")]),this._v(" (GTX 1000 series, Titan Xp, Tesla P40, Tesla P4, GP100/Tesla P100 – DGX-1)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("» "),t("strong",[this._v("Nvidia Volta")]),this._v(" - "),t("code",[this._v("rhminer.version.operating-system.Tesla.zip")]),this._v(" (Tesla V100, Titan V, Quadro GV100)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configure-rhminer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-rhminer","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure RHMiner")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("For Windows:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For CPU and GPU:\n"),t("code",[this._v("rhminer.exe -v 2 -r 20 -s http://127.0.0.1:4009 -cpu -cputhreads 1 -gpu 0 -gputhreads 100")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For CPU ONLY:\n"),t("code",[this._v("rhminer.exe -v 2 -r 20 -s http://127.0.0.1:4009 -cpu -cputhreads 1")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For GPU ONLY:\n"),t("code",[this._v("rhminer.exe -v 2 -r 20 -s http://127.0.0.1:4009 -gpu 0 -gputhreads 100")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Change the "),t("code",[this._v("-cputhreads")]),this._v(" value to the number of threads your CPU can run. If you have a 4-core/8-thread CPU, start with 6.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Change the "),t("code",[this._v("-gputhreads")]),this._v(" value to the result of this function: "),t("code",[this._v("GPU Memory (MB) * 0.75 / 8.8")]),this._v("\n(e.g. For a GTX 1060 3GB that is 3000 * 0.75 / 8.8 = 255 threads).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("For Linux:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Run the miner:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Command Line Options for RHMiner can be seen with the "),t("code",[this._v("-h")]),this._v(" argument:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("General options:\n  -list                 List all gpu in the system\n  -diff                 Set local difficulyu. ex: -diff 0.832\n  -logfilename          Set the name of the log's filename. Note: the log file will be overwritten every time you start rhminer\n  -extrapayload         An extra payload to be added when submiting solution to local wallet.\n  -displayspeedtimeout  Display mining speeds every x seconds. Default is 10\n  -processpriority      Set miner's process priority. 0=Background Process, 1=Low Priority, 2=Normal Priority. Default is 2. WARNING: Changing this value will affect GPU mining.\n  -v                    Log verbosity. From 0 to 3. 0 no log, 1 normal log, 2 include warnings. Default is 1\n  -devfee               Set devfee raward percentage. To disable devfee, simply put 0 here. But, before disabling developer fees, consider that it takes time and energy to maintain, develop and optimize this software. Your help is very appreciated.\n  -completelist         Exhaustive list of all devices in the system\n  -processorsaffinity   Force miner to only run on selected logical core processors. ex: -processorsaffinity 0,3 will make the miner run only on logical core #0 and #3. WARNING: Changing this value will affect GPU mining.\n  -maxsubmiterrors      Stop the miner when a number of consecutive submit errors occured. Default is 10 consecutive errors. This is usefull when mining into local wallet.\n\nGpu options:\n  -cpu                  Enable the use of CPU to mine. ex '-cpu -cputhread 4' will enable mining on cpu while gpu mining.\n  -cputhreads           Number of CPU miner threads when mining with CPU. ex: -cpu -cputhread 4\n  -gputhreads           Cuda thread count. ex: -gputhreads  100 launche 100 threads on selected gpu\n  -gpu                  Enable indiviaual GPU by their index. GPU not in the list will be disabled. ex: -gpu 0,3,4.\n  -kernelactivewayting  Enable active wayting on kernel run. This will raise cpu usage but bring more stability, specially when mining on multiple gpu. WARNING: This affect cpu mining\n\nNetwork options:\n  -dar                  Disable auto-reconnect on connection lost. Note : The miner will exit uppon loosing connection.\n  -s                    Stratum server or wallet address:port. NOTE: You can also use http://address.xyz to connect to local wallet.\n  -su                   Stratum user\n  -pw                   Stratum password\n  -fo                   Failover address:port for stratum or local wallet\n  -fou                  Failover user for stratum of a local wallet\n  -fop                  Failover password for stratum or local wallet\n  -r                    Retries connection count for stratum or local wallet\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Troubleshooting tips")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On Windows 7/8/10, if you get "),t("code",[this._v("missing OpenCL.dll")]),this._v(" error, you need to download it into rhminer's folder (hint: You can safely get one with the Intel SDK on Intel's opencl website).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If RHMiner stops with the error: "),t("code",[this._v('Miner name is too long\', click the "Project" -> "Options" menu in the GUI wallet and change the first fields value to something shorter (max 26 characters). If you use the PascalCoin daemon, change the value of')]),this._v("RPC_SERVERMINER_NAME` in the pascalcoin_daemon.ini to something shorter than 27 characters.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Developer fee information")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The default donation is 1%. This donation is hardcoded in the binaries downloadable on github. This is to help compensate for the time it took to R&D, develop, stabilize and optimize this miner and for the upcoming bug fixes and optimizations. To disable this donation, download and compile locally then use the "),t("code",[this._v("-devfee")]),this._v(' option with chosen donation percentage. "0" will disable the donation.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("For direct donations:")])])}],!1,null,null,null);t.default=s.exports}}]);