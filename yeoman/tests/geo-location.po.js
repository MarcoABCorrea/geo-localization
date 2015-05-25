/*global element, by*/
'use strict';

function GeoLocationPo() {

this.test = 'lol';
this.allButtons = element(by.tagName('button'));
  /*// Arquivos
  this.arquivoFormatoInvalido = '/home/marcoabc/workspace_sgr/sgr/sgr-web/src/main/frontend/bower.json';
  this.arquivoFormatoValido = '/home/marcoabc/workspace_sgr/sgr/sgr-web/src/main/frontend/bower.json';
  this.arquivoTamanhoInvalido = '/home/marcoabc/Downloads/arquivoTeste.doc';
  this.nomeArquivoTamanhoInvalido = 'C:\\fakepath\\arquivoTeste.doc';
  this.nomeArquivoFormatoValido = 'C:\\fakepath\\bower.json';

  // FileUploads
  this.fileUploads = element.all(by.css('input.file-uploader'));
  this.fileUploadSIA = this.fileUploads.get(0);

  // Accordions
  this.accordions = element.all(by.repeater('sistema in sistemas'));
  this.accordionSIA = this.accordions.get(0);
  this.accordionAberto = element(by.css('div.am-collapse.in'));
  this.nomeAccordionAberto = element(by.css('div.panel-default')).element(by.css('div.am-collapse.in'));

  // $('#filho').parets('tstst[id]')

  // Botões
  this.todosBotoes = element(by.css('.panel-botoes')).all(by.tagName('button'));
  this.buttonImportar = this.todosBotoes.get(0);
  this.buttonLimpar = this.todosBotoes.get(1);
  this.buttonVoltar = this.todosBotoes.get(2);

  // Modals
  this.msg0300Modal = element(by.css('.modal.msg0300Modal'));
  this.buttonSimMsg0300Modal = element(by.id('btnSimMSG0300'));
  this.buttonNaoMsg0300Modal = element(by.id('btnNaoMSG0300'));
  this.msg0314Modal = element(by.css('.modal.msg0314Modal'));
  this.buttonSimMsg0314Modal = element(by.id('btnSimMSG0314'));
  this.buttonNaoMsg0314Modal = element(by.id('btnNaoMSG0314'));

  // Alerts
  this.alertTitle = element(by.id('alerts-container')).element(by.binding('title'));

  // Outros
  this.heading = element(by.tagName('h3'));

  // Funções
  this.adicionarArquivo = function(accordion, fileUpload){
    accordion.click();
    expect(this.accordionAberto.isPresent()).toEqual(true);
    fileUpload.sendKeys(this.arquivoFormatoValido);
    expect(fileUpload.getAttribute('value')).toEqual(this.nomeArquivoFormatoValido);
  }

  this.adicionarArquivoSIA = function(){
    this.adicionarArquivo(this.accordionSIA, this.fileUploadSIA);
  }

  this.limpar = function(){
   this.buttonLimpar.click();
   // expect(this.selectOrigem.getAttribute('value')).toBe('');
  }*/
}

module.exports = GeoLocationPage;