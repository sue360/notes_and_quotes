# Generated by Django 4.1.4 on 2022-12-08 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='notes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Content', models.CharField(max_length=240)),
                ('Created_at', models.DateTimeField(max_length=50)),
            ],
        ),
    ]
