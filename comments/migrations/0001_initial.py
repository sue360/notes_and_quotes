# Generated by Django 4.1.4 on 2022-12-15 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Content', models.CharField(max_length=240)),
                ('Created_at', models.DateTimeField(max_length=50)),
                ('Location', models.CharField(max_length=50)),
            ],
        ),
    ]
