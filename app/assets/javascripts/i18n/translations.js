var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken","in_between":"must be in between %{min} and %{max}","spoofed_media_type":"has an extension that does not match its contents","already_confirmed":"was already confirmed, please try signing in","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","expired":"has expired, please request a new one","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"}}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"ransack":{"search":"search","predicate":"predicate","and":"and","or":"or","any":"any","all":"all","combinator":"combinator","attribute":"attribute","value":"value","condition":"condition","sort":"sort","asc":"ascending","desc":"descending","predicates":{"eq":"equals","eq_any":"equals any","eq_all":"equals all","not_eq":"not equal to","not_eq_any":"not equal to any","not_eq_all":"not equal to all","matches":"matches","matches_any":"matches any","matches_all":"matches all","does_not_match":"doesn't match","does_not_match_any":"doesn't match any","does_not_match_all":"doesn't match all","lt":"less than","lt_any":"less than any","lt_all":"less than all","lteq":"less than or equal to","lteq_any":"less than or equal to any","lteq_all":"less than or equal to all","gt":"greater than","gt_any":"greater than any","gt_all":"greater than all","gteq":"greater than or equal to","gteq_any":"greater than or equal to any","gteq_all":"greater than or equal to all","in":"in","in_any":"in any","in_all":"in all","not_in":"not in","not_in_any":"not in any","not_in_all":"not in all","cont":"contains","cont_any":"contains any","cont_all":"contains all","not_cont":"doesn't contain","not_cont_any":"doesn't contain any","not_cont_all":"doesn't contain all","start":"starts with","start_any":"starts with any","start_all":"starts with all","not_start":"doesn't start with","not_start_any":"doesn't start with any","not_start_all":"doesn't start with all","end":"ends with","end_any":"ends with any","end_all":"ends with all","not_end":"doesn't end with","not_end_any":"doesn't end with any","not_end_all":"doesn't end with all","true":"is true","false":"is false","present":"is present","blank":"is blank","null":"is null","not_null":"is not null"}},"will_paginate":{"previous_label":"\u0026#8592; Previous","next_label":"Next \u0026#8594;","page_gap":"\u0026hellip;","page_entries_info":{"single_page":{"zero":"No %{model} found","one":"Displaying 1 %{model}","other":"Displaying all %{count} %{model}"},"single_page_html":{"zero":"No %{model} found","one":"Displaying \u003Cb\u003E1\u003C/b\u003E %{model}","other":"Displaying \u003Cb\u003Eall\u0026nbsp;%{count}\u003C/b\u003E %{model}"},"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","multi_page_html":"Displaying %{model} \u003Cb\u003E%{from}\u0026nbsp;-\u0026nbsp;%{to}\u003C/b\u003E of \u003Cb\u003E%{count}\u003C/b\u003E in total"}},"devise":{"confirmations":{"confirmed":"Your account was successfully confirmed.","send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid email or password.","locked":"Your account is locked.","last_attempt":"You have one more attempt before your account will be locked.","not_found_in_database":"Invalid email or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your account before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock Instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions about how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password was changed successfully. You are now signed in.","updated_not_active":"Your password was changed successfully."},"registrations":{"destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.","updated":"You updated your account successfully."},"sessions":{"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"hello":"Hello world"},"pt-BR":{"devise":{"confirmations":{"confirmed":"Sua conta foi confirmada com sucesso. Você está logado.","send_instructions":"Dentro de minutos, você receberá um e-mail com instruções para a confirmação da sua conta.","send_paranoid_instructions":"Se o seu endereço de e-mail estiver cadastrado, você receberá uma mensagem com instruções para confirmação da sua conta."},"failure":{"already_authenticated":"Você já está logado.","inactive":"Sua conta ainda não foi ativada.","invalid":"E-mail ou senha inválidos.","invalid_token":"O token de autenticação não é válido.","locked":"Sua conta está bloqueada.","not_found_in_database":"E-mail ou senha inválidos.","timeout":"Sua sessão expirou, por favor, efetue login novamente para continuar.","unauthenticated":"Para continuar, efetue login ou registre-se.","unconfirmed":"Antes de continuar, confirme a sua conta."},"mailer":{"confirmation_instructions":{"subject":"Instruções de confirmação"},"reset_password_instructions":{"subject":"Instruções de troca de senha"},"unlock_instructions":{"subject":"Instruções de desbloqueio"}},"omniauth_callbacks":{"failure":"Não foi possível autenticá-lo como %{kind} porque \"%{reason}\".","success":"Autenticado com sucesso com uma conta de %{kind}."},"passwords":{"no_token":"Você só pode acessar essa página através de um e-mail de troca de senha. Se já estiver acessando por um e-mail, verifique se a URL fornecida está completa.","send_instructions":"Dentro de minutos, você receberá um e-mail com instruções para a troca da sua senha.","send_paranoid_instructions":"Se o seu endereço de e-mail estiver cadastrado, você receberá um link de recuperação da senha via e-mail.","updated":"Sua senha foi alterada com sucesso. Você está logado.","updated_not_active":"Sua senha foi alterada com sucesso."},"registrations":{"destroyed":"Tchau! Sua conta foi cancelada com sucesso. Esperamos vê-lo novamente em breve.","signed_up":"Login efetuado com sucesso. Se não foi autorizado, a confirmação será enviada por e-mail.","signed_up_but_inactive":"Você foi cadastrado com sucesso. No entanto, não foi possível efetuar login, pois sua conta não foi ativada.","signed_up_but_locked":"Você foi cadastrado com sucesso. No entanto, não foi possível efetuar login, pois sua conta está bloqueada.","signed_up_but_unconfirmed":"Uma mensagem com um link de confirmação foi enviada para o seu endereço de e-mail. Por favor, abra o link para confirmar a sua conta.","update_needs_confirmation":"Você atualizou a sua conta com sucesso, mas o seu novo endereço de e-mail precisa ser confirmado. Por favor, acesse-o e clique no link de confirmação que enviamos.","updated":"Sua conta foi atualizada com sucesso."},"sessions":{"signed_in":"Login efetuado com sucesso!","signed_out":"Saiu com sucesso."},"unlocks":{"send_instructions":"Dentro de minutos, você receberá um email com instruções para o desbloqueio da sua conta.","send_paranoid_instructions":"Se sua conta existir, você receberá um e-mail com instruções para desbloqueá-la em alguns minutos.","unlocked":"Sua conta foi desbloqueada com sucesso. Efetue login para continuar."},"views":{"sessions":{"please_sign_in":"Por favor, faça login.","remember_me":"Continuar logado após fechar o navegador","sign_in":"Logar"},"links":{"forgot_password":"Esqueceu sua senha?","sign_in":"Logar"},"passwords":{"forgot_password":"Esqueceu sua senha?","send_reset_instructions":"Me enviar instruções de desbloqueio"}}},"errors":{"messages":{"already_confirmed":"já foi confirmado","confirmation_period_expired":"precisa ser confirmada em até %{period}, por favor, solicite uma nova","expired":"expirou, por favor, solicite uma nova","not_found":"não encontrado","not_locked":"não foi bloqueado","not_saved":{"one":"Não foi possível salvar %{resource}: 1 erro","other":"Não foi possível salvar %{resource}: %{count} erros."},"accepted":"deve ser aceito","blank":"não pode ficar em branco","present":"deve ficar em branco","confirmation":"não está de acordo com a confirmação","empty":"não pode ficar vazio","equal_to":"deve ser igual a %{count}","even":"deve ser par","exclusion":"não está disponível","greater_than":"deve ser maior que %{count}","greater_than_or_equal_to":"deve ser maior ou igual a %{count}","inclusion":"não está incluído na lista","invalid":"não é válido","less_than":"deve ser menor que %{count}","less_than_or_equal_to":"deve ser menor ou igual a %{count}","not_a_number":"não é um número","not_an_integer":"não é um número inteiro","odd":"deve ser ímpar","record_invalid":"A validação falhou: %{errors}","restrict_dependent_destroy":{"one":"Não é possível excluir o registro pois existe um %{record} dependente","many":"Não é possível excluir o registro pois existem %{record} dependentes"},"taken":"já está em uso","too_long":"é muito longo (máximo: %{count} caracteres)","too_short":"é muito curto (mínimo: %{count} caracteres)","wrong_length":"não possui o tamanho esperado (%{count} caracteres)"},"format":"%{attribute} %{message}","template":{"body":"Por favor, verifique o(s) seguinte(s) campo(s):","header":{"one":"Não foi possível gravar %{model}: 1 erro","other":"Não foi possível gravar %{model}: %{count} erros."}}},"views":{"application":{"nav":{"hello":"Olá","sign_out":"Deslogar"}}},"will_paginate":{"next_label":"Próximos \u0026#8594;","page_entries_info":{"multi_page":"Exibindo %{model} %{from} - %{to} de %{count} no total","multi_page_html":"\u003Cb\u003E%{from}\u003C/b\u003E à \u003Cb\u003E%{to}\u003C/b\u003E %{model} no total de \u003Cb\u003E%{count}\u003C/b\u003E","single_page":{"one":"Exibindo 1 %{model}","other":"Exibindo todos os %{count} %{model}","zero":"Nenhum %{model} encontrado"},"single_page_html":{"one":"Exibindo \u003Cb\u003E1\u003C/b\u003E %{model}","other":"Exibindo \u003Cb\u003Etodos os\u0026nbsp;%{count}\u003C/b\u003E %{model}","zero":"Nenhum %{model} encontrado"}},"page_gap":"\u0026hellip;","previous_label":"\u0026#8592; Anteriores"},"placeholders":{"type_here_male":"Digite aqui o","type_here_female":"Digite aqui a"},"file-upload":{"select_file":"Selecione Imagem","change":"Mudar","remove":"Remover"},"date":{"abbr_day_names":["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],"abbr_month_names":[null,"Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],"day_names":["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],"formats":{"default":"%d/%m/%Y","long":"%d de %B de %Y","short":"%d de %B"},"month_names":[null,"Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"aproximadamente 1 hora","other":"aproximadamente %{count} horas"},"about_x_months":{"one":"aproximadamente 1 mês","other":"aproximadamente %{count} meses"},"about_x_years":{"one":"aproximadamente 1 ano","other":"aproximadamente %{count} anos"},"almost_x_years":{"one":"quase 1 ano","other":"quase %{count} anos"},"half_a_minute":"meio minuto","less_than_x_minutes":{"one":"menos de um minuto","other":"menos de %{count} minutos"},"less_than_x_seconds":{"one":"menos de 1 segundo","other":"menos de %{count} segundos"},"over_x_years":{"one":"mais de 1 ano","other":"mais de %{count} anos"},"x_days":{"one":"1 dia","other":"%{count} dias"},"x_minutes":{"one":"1 minuto","other":"%{count} minutos"},"x_months":{"one":"1 mês","other":"%{count} meses"},"x_seconds":{"one":"1 segundo","other":"%{count} segundos"}},"prompts":{"day":"Dia","hour":"Hora","minute":"Minuto","month":"Mês","second":"Segundo","year":"Ano"}},"helpers":{"warning":"Cuidado","actions":{"listing_model":"Listando %{model}","editing_model":"Editando %{model}","new_model":"Novo %{model}","new_model_female":"Nova %{model}","create_and_continue":"Criar e Continuar","add":"Adicionar %{model}"},"select":{"prompt":"Por favor selecione"},"submit":{"create":"Criar %{model}","submit":"Salvar %{model}","update":"Atualizar %{model}"},"links":{"back":"Voltar","show":"Mostrar","edit":"Editar","destroy":"Deletar"},"confirm":"Você tem certeza? Esse %{model} será excluído.","confirm_female":"Você tem certeza? Essa %{model} será excluída.","flash_messages":{"model_added":"%{model} foi Adicionado","model_removed":"%{model} foi Removido","not_authorized":"Acesso não permitido!","created":"%{model} criado com sucesso.","created_female":"%{model} criada com sucesso.","was_not_created":"%{model} não criado.","was_not_created_female":"%{model} não criada.","updated":"%{model} atualizado com sucesso.","updated_female":"%{model} atualizada com sucesso.","both_were_updated":"%{model1} e %{model2} atualizados com sucesso.","both_were_not_updated":"%{model1} e %{model2} não foram atualizados.","was_not_updated":"%{model} não foi atualizado.","was_not_updated_female":"%{model} não foi atualizada.","deleted":"%{model} deletado com sucesso.","deleted_female":"%{model} deletada com sucesso.","was_not_deleted":"%{model} não foi deletado.","was_not_deleted_female":"%{model} não foi deletada."}},"number":{"currency":{"format":{"delimiter":".","format":"%u %n","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"R$"}},"format":{"delimiter":".","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":{"one":"bilhão","other":"bilhões"},"million":{"one":"milhão","other":"milhões"},"quadrillion":{"one":"quatrilhão","other":"quatrilhões"},"thousand":"mil","trillion":{"one":"trilhão","other":"trilhões"},"unit":""}},"format":{"delimiter":".","precision":2,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":"."}},"precision":{"format":{"delimiter":"."}}},"support":{"array":{"last_word_connector":" e ","two_words_connector":" e ","words_connector":", "}},"time":{"am":"","formats":{"default":"%a, %d de %B de %Y, %H:%M:%S %z","long":"%d de %B de %Y, %H:%M","short":"%d de %B, %H:%M"},"pm":""},"forms":{"settings":{"cost_per_thousand_points":{"tooltip":"Ao atualizar esse valor, o custo de \u003Cb\u003ETODOS\u003C/b\u003E os Bordados serão alterados."}},"patches":{"groups":{"press_tab_to_create":"Pressione Tab para criar um grupo"},"code":{"tooltip":"Será salvo em letras minúsculas"}}},"activemodel":{"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"deve ser aceito","blank":"não pode ficar em branco","present":"deve ficar em branco","confirmation":"não está de acordo com a confirmação","empty":"não pode ficar vazio","equal_to":"deve ser igual a %{count}","even":"deve ser par","exclusion":"não está disponível","greater_than":"deve ser maior que %{count}","greater_than_or_equal_to":"deve ser maior ou igual a %{count}","inclusion":"não está incluído na lista","invalid":"não é válido","less_than":"deve ser menor que %{count}","less_than_or_equal_to":"deve ser menor ou igual a %{count}","not_a_number":"não é um número","not_an_integer":"não é um número inteiro","odd":"deve ser ímpar","record_invalid":"A validação falhou: %{errors}","restrict_dependent_destroy":{"one":"Não é possível excluir o registro pois existe um %{record} dependente","many":"Não é possível excluir o registro pois existem %{record} dependentes"},"taken":"já está em uso","too_long":"é muito longo (máximo: %{count} caracteres)","too_short":"é muito curto (mínimo: %{count} caracteres)","wrong_length":"não possui o tamanho esperado (%{count} caracteres)"},"template":{"body":"Por favor, verifique o(s) seguinte(s) campo(s):","header":{"one":"Não foi possível gravar %{model}: 1 erro","other":"Não foi possível gravar %{model}: %{count} erros."}}}},"activerecord":{"models":{"patch":{"one":"Bordado","other":"Bordados"},"setting":{"one":"Configuração","other":"Configurações"},"frame":{"one":"Bastidor","other":"Bastidores"},"seam_round":{"one":"Bastidor","other":"Bastidores"},"user":{"one":"Usuário","other":"Usuários"}},"attributes":{"user":{"name":"Nome","email":"Email","password":"Senha"},"patch":{"name":"Nome","code":"Código","dots_count":"Nº de Pontos","colors_count":"Nº de Cores","width":"Largura","height":"Altura","cost":"Custo","size":"Tamanho","in_stock":"Em Estoque","groups":"Grupos"},"setting":{"cost_per_thousand_points":"Custo por mil pontos"},"frame":{"size":"Tamanho","width":"Largura","height":"Altura","maximum_dots":"Número máximo de pontos"},"seam_round":{"frame_id":"Bastidor","patch_id":"Bordado","patches_per_frame":"Bordados por Bastidor"}},"errors":{"seam_round":{"uniqueness":"Esse Bastidor já foi usado nesse Bordado","patches_per_frame":"Número total de pontos (%{dots}) excede o permitido pelo bastidor"},"prohibited_from_being_saved":"proíbem esse %{model} de ser salvo","prohibited_from_being_saved_female":"proíbem essa %{model} de ser salva","format":"%{attribute} %{message}","messages":{"accepted":"deve ser aceito","blank":"não pode ficar em branco","present":"deve ficar em branco","confirmation":"não está de acordo com a confirmação","empty":"não pode ficar vazio","equal_to":"deve ser igual a %{count}","even":"deve ser par","exclusion":"não está disponível","greater_than":"deve ser maior que %{count}","greater_than_or_equal_to":"deve ser maior ou igual a %{count}","inclusion":"não está incluído na lista","invalid":"não é válido","less_than":"deve ser menor que %{count}","less_than_or_equal_to":"deve ser menor ou igual a %{count}","not_a_number":"não é um número","not_an_integer":"não é um número inteiro","odd":"deve ser ímpar","record_invalid":"A validação falhou: %{errors}","restrict_dependent_destroy":{"one":"Não é possível excluir o registro pois existe um %{record} dependente","many":"Não é possível excluir o registro pois existem %{record} dependentes"},"taken":"já está em uso","too_long":"é muito longo (máximo: %{count} caracteres)","too_short":"é muito curto (mínimo: %{count} caracteres)","wrong_length":"não possui o tamanho esperado (%{count} caracteres)"},"template":{"body":"Por favor, verifique o(s) seguinte(s) campo(s):","header":{"one":"Não foi possível gravar %{model}: 1 erro","other":"Não foi possível gravar %{model}: %{count} erros."}}}}}};