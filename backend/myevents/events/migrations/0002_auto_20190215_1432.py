# Generated by Django 2.1.4 on 2019-02-15 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='updated_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
