from django.views.generic.base import TemplateView
from django.utils.safestring import mark_safe
import json

SOCIAL_URLS = [
    '/accounts/instagram/login/?process=login', 
    '/accounts/facebook/login/?process=login', 
    '/accounts/vk/login/?process=login'
    ]

## Non-working dynamic URL invocation
# import allauth.socialaccount

# pl = allauth.socialaccount.providers.registry.get_list()

# SOCIAL_URLS = []

# for i in pl:
#     SOCIAL_URLS.append(i.get_login_url(i.request, process='login'))

class Index(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, *args, **kwargs):
        context = super(Index, self).get_context_data(*args, **kwargs)
        context['data'] = mark_safe(json.dumps(
            {
                'social': {
                    'urls': SOCIAL_URLS
                    }
            }
        ))
        return context