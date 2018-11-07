cls

@echo .
@echo .

@echo ==========================================================================
@echo ==========================================================================

@echo .

@echo Das Package ember-cli-shims 1.2.0 habe ich manuell nachinstalliert, damit das Plugin ember-cli-slick 2.0.0 temporär wieder funktioniert, bis der Entwickler das Plugin wieder für EMber 3.5 aktualisiert hat.
@echo https://github.com/laantorchaweb/ember-cli-slick/issues/35

@echo .

@echo ==========================================================================
@echo ==========================================================================

@echo .

@rd /q/s tmp
@rd /q/s dist
@rd /q/s vendor

rem ember server --proxy http://localhost:4300
ember server
