var vastModel = require("../model/vast-model");

var vastService = {
    createVast: createVast,
    getVastById: getVastById,
    getVasts:getVasts
}

function createVast(vastURL, position, hideUI) {
    return new Promise((resolve, reject) => {
        vastModel.createVast(vastURL, position, hideUI).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getVastById(id) {
    return new Promise((resolve, reject) => {
        vastModel.getVastById(id).then((data) => {
            let {
                vast_url,
                position,
                hideUI,
                id
            } = data;
            //only if exist
            if (id) {
                //Enable 'strange' parameters. mysql uses 1 and 0 instead of true and false on the defiinition on my machine
                hideUI = (hideUI === true || hideUI === 'true' || hideUI === 1) ? true : false;
                let vastUrl = `${data.vast_url}&position=${position}&hideUI=${hideUI}&videoId=${id}`
                resolve(
                    `<VAST version="2.0">
                    <Ad id="ComboGuard">
                    <InLine>
                        <AdSystem>2.0</AdSystem>
                        <Impression/>
                        <Creatives>
                            <Creative>
                                <Linear>
                                <Duration>00:00:19</Duration>
                                <MediaFiles>
                                    <MediaFile type="application/x-shockwave-flash" apiFramework="VPAID" height="168" width="298" delivery="progressive">
                                        <![CDATA[
                                        http://localhost/ComboWrapper.swf?vast=${vastUrl}
                                        ]]>
                                    </MediaFile>
                                    <MediaFile type="application/javascript" apiFramework="VPAID" height="168" width="298" delivery="progressive">
                                        <![CDATA[
                                        http://localhost/ComboWrapper.js?vast=${vastUrl}
                                        ]]>
                                    </MediaFile>
                                </MediaFiles>
                                </Linear>
                            </Creative>
                        </Creatives>
                    </InLine>
                    </Ad>
                </VAST>`)
            } else {
                resolve('<VAST version="2.0"></VAST>')
            }
        }).catch((err) => {
            reject(err);
        })
    });
}

function getVasts() {
    return new Promise((resolve, reject) => {
        vastModel.getVasts().then((data) => {
            resolve(data).catch((err) => {
                reject(err);
            })
        });
    })
}

module.exports = vastService;