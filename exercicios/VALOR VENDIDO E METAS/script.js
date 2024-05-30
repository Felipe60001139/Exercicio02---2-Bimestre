function calcularMetas() {
    let valorVendido = parseFloat(document.getElementById("valorVendido").value);
    let meta = parseFloat(document.getElementById("meta").value);
    let metaMinima = parseFloat(document.getElementById("metaMinima").value);
    let status = "";
    
    if (valorVendido >= meta) {
        status = "Atingiu a meta.";
    } else if (valorVendido >= metaMinima) {
        status = "Atingiu a meta mínima.";
    } else {
        status = "Não atingiu nenhuma das metas.";
    }

    let percentualMeta = (valorVendido / meta) * 100;
    let percentualMetaMinima = (valorVendido / metaMinima) * 100;

        document.getElementById("status").innerText = status;
        document.getElementById("percentualMeta").innerText = percentualMeta.toFixed(2) + "% da meta";
        document.getElementById("percentualMetaMinima").innerText = percentualMetaMinima.toFixed(2) + "% da meta mínima";
 }
