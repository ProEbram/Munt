<script>
function convert(){var ele1 = document.getElementById("textencry2");var replaced;replaced = ele1.value;replaced = replaced.replace(/<panjan/ig, "&lt;panjan");ele1.value = replaced;}
        function enkrip(formnya) {
            var kode1 = escape(formnya.kodeawal.value);
            var kode2="";
            var dop="";
            var key = formnya.parameter.value;
            var panjang = kode1.length;
            for (i=0;i<panjang;i++)  {
                if (formnya.metode.value=="kurang") {
                    kode2+=String.fromCharCode(kode1.charCodeAt(i)-key);
                    dop="+";
                }
                else
                    if(formnya.metode.value=="tambah") {
                        kode2+=String.fromCharCode(kode1.charCodeAt(i)+key);
                        dop="-";
                    }
                    else
                        if(formnya.metode.value=="xor") {
                            kode2+=String.fromCharCode(kode1.charCodeAt(i)^key);
                            dop="^";
                        }
            }

            var dekripsinya = 
            'var enkripsi="'+kode2+'"; teks=""; teksasli="";'+
            'var panjang;'+
            'panjang=enkripsi.length;'+
            'for (i=0;i<panjang;i++)'+ 
            '{ teks+=String.fromCharCode(enkripsi.charCodeAt(i)'+dop+key+') }'+
            'teksasli=unescape(teks);'+
            'document.write(teksasli);';
     
            // formnya.hasil.value='\<SCRIPT\>'+dekripsinya+'\</SCRIPT\>';
            formnya.hasil.value=dekripsinya;
     
            if (formnya.preview.value=="Ya") {
                handle=window.open();
                handle.document.writeln("<HTML><HEAD><TITLE>Jazar's Free Tools - JavaScript</TITLE></HEAD>");
                handle.document.write('<BODY>\<SCRIPT\>');
                handle.document.write(dekripsinya);
                handle.document.writeln('\</SCRIPT\></BODY></HEAD></HTML>');
            }
     
            <!-- Hitung hasilnya -->
            formnya.panjangasli.value=formnya.kodeawal.value.length;
            formnya.panjangenkripsi.value=formnya.hasil.value.length;
            formnya.pertambahan.value=formnya.hasil.value.length-formnya.kodeawal.value.length;
        }
</script>
<form id="mudwnnencry">
<div style=" border-bottom: 1px solid #999; color: #555; display: block !important;  font: bold 16px droid arabic kufi,tahoma; margin: 0 -10px 10px -15px;  padding: 0 0 10px;  text-align: center;">آداة <a target="_blank" rel="dofollow" href="http://mudwnn.blogspot.com" style=" color: #555; display: inline-block !important; text-decoration: none;"> مدون نت </a> لتشفير اكواد الجافا
تصميم : <a href='http://cnmu.blogspot.com/' target='_blank' id='muntport' >كن مدون</a>

<textarea placeholder="أضف هنا كود الجافا المراد تشفيره كاملاً يشمل وسم الفتح &lt;script&gt; ووسم الغلق &lt;/script&gt;" cols="70" wrap="virtual" rows="8" name="kodeawal" class="input_1" id="textencry1"></textarea> 
<p style="text-align: center;"><input type="button" name="B1" value="تشفير" onclick="enkrip(this.form,this); return true"> 
<input type="reset" name="B2" value="تنظيف"> <input type="hidden" name="metode" value="xor">
<input type="hidden" name="parameter" value="2"> <input type="hidden" name="preview" value="Tidak"> </p>
<p style="text-align: center;"><input onclick="convert();" type="button" value="إذا كنت ستضيف الكود داخل القالب اضغط هنا بعد الضغط على تشفير" /></p>
<textarea cols="70" wrap="virtual" rows="8" name="hasil" class="input_1" id="textencry2"></textarea>
</form>
