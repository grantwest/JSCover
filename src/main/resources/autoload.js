var jscoverage_jscoverage_loaded = jscoverage_jscoverage_loaded || false;
if(jscoverage_jscoverage_loaded === false) {
    jscoverage_jscoverage_loaded = true;
    $.getScript('^[jscover-server-uri]/jscoverage.js', function(){
        console.log('jscoverage.js loaded');
    });
}
